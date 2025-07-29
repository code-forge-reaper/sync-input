import fs from 'fs'
export function input(prompt?: string): string | null {
	if (prompt) {
		//process.stdout.write(prompt)
		console.log(prompt)
	}
	const buf = Buffer.alloc(1)
	let str = ''

	while (true) {
		const bytesRead = fs.readSync(0, buf, 0, 1, null)

		if (bytesRead === 0 && process.stdin.closed) {
			// EOF (Ctrl+D or input closed)
			if (str.length === 0) return null // nothing typed, pure EOF
			else break // return what was typed before EOF
		}

		if (buf[0] === 10) break // newline
		if (buf[0] !== 13) str += String.fromCharCode(buf[0]) // ignore \r
	}

	return str
}
