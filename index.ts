import fs from 'fs'

function readline() {
	const buf = Buffer.alloc(1)
	let str = ''

	while (true) {
		const bytesRead = fs.readSync(0, buf, 0, 1, null)

		if (bytesRead === 0) {
			// EOF (Ctrl+D or input closed)
			if (str.length === 0) return null // nothing typed, pure EOF
			else break // return what was typed before EOF
		}

		if (buf[0] === 10) break // newline
		if (buf[0] !== 13) str += String.fromCharCode(buf[0]) // ignore \r
	}

	return str
}

if(import.meta.main){
	// test
	console.log('Type something (Ctrl+D to send EOF):')
	const line = readline()

	if (line === null) {
		console.log('EOF detected. stdin closed.')
	} else {
		console.log('You typed:', line)
	}

}