const morseCodeMap = {
	'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
	'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
	'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
	'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
	'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
	'0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
	'5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
	'.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--', '/': '-..-.',
	'(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.',
	'=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
	'$': '...-..-', '@': '.--.-.', ' ': '/'
}

const reverseMorseCodeMap = Object.fromEntries( Object.entries( morseCodeMap ).map( ( [ k, v ] ) => [ v, k ] ) )

function textToMorse ()
{
	const text = document.getElementById( 'text-input' ).value.toUpperCase()
	let morse = ''
	for ( const char of text )
	{
		if ( morseCodeMap[ char ] )
		{
			morse += morseCodeMap[ char ] + ' '
		} else
		{
			morse += '? ' // unknown character
		}
	}
	document.getElementById( 'morse-output' ).value = morse.trim()
}