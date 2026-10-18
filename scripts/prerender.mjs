// Inserisce l'HTML della landing in dist/index.html, così il copy è leggibile senza JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const ssrDir = resolve('dist-ssr')
const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const html = render('/')
const file = resolve('dist/index.html')
const page = readFileSync(file, 'utf8')
if (!page.includes('<div id="root"></div>')) throw new Error('root vuoto non trovato in dist/index.html')
writeFileSync(file, page.replace('<div id="root"></div>', `<div id="root">${html}</div>`))
rmSync(ssrDir, { recursive: true, force: true })
console.log(`prerender ok: ${html.length} caratteri di HTML`)
