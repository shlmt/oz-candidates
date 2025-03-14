import express, { Request, Response } from 'express'
import cors from 'cors'
import { language } from './models/language.interface'
import { candidate } from './models/candidate.interface'

const app = express()

const port = process.env.PORT || 1234

let candidates: candidate[] | null = null
let languages: string[] | null = null

app.use(cors({
	origin: process.env.CLIENT_URL || '*',
	methods: ['GET'], 
}))
  
app.get('/api/candidates', (req: Request, res: Response) => {
	if (!candidates) {
		res.status(500).json({ msg: 'error fetch data' })
		return
	}
	res.status(200).json(candidates)
})

app.get('/api/languages', (req: Request, res: Response) => {
	if (!languages) {
		res.status(500).json({ msg: 'error fetch data' })
		return
	}
	res.status(200).json(languages)
})

app.listen(port, async () => {
	console.log(`server run on ${port}`)
	try {
		const res = await fetch('https://raw.githubusercontent.com/ozsoftware/canidates/refs/heads/main/db.json')
		if (res.ok) {
			const data = await res.json()
			if (!data.Candidates || !data.Languages || !Array.isArray(data.Candidates) || !Array.isArray(data.Languages)) {
				throw new Error('Invalid API response structure')
			}
			languages = data.Languages.map((lang:language)=>lang.name)
			candidates = data.Candidates.map((cand: any) => {
				const languages = cand.languages
					.map((langCode: number) => data.Languages.find((lang: language) => langCode == lang.id)?.name)
					.filter((lang: string) => !!lang)
				return { ...cand, languages, lastUpdateDate: new Date(cand.lastUpdateDate) } as candidate
			}).sort((a: candidate, b: candidate) => b.lastUpdateDate.getTime() - a.lastUpdateDate.getTime())
		}
	} catch (error) {
		console.warn('Error initializing candidates:', error)
	}
})
