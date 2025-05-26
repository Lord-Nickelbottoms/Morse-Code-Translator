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
	var outputElement = document.getElementById( 'morse-output' )
	outputElement.value = morse.trim()
	outputElement.scrollIntoView( { behavior: 'smooth', block: 'end' } )
}

function morseToText ()
{
	const morse = document.getElementById( 'morse-input' ).value.trim()
	let text = ''
	const codes = morse.split( ' ' )
	for ( const code of codes )
	{
		if ( reverseMorseCodeMap[ code ] )
		{
			text += reverseMorseCodeMap[ code ]
		} else if ( code === '' )
		{
			text += ''
		} else
		{
			text += '?' // unknown Morse code
		}
	}
	var outputElement = document.getElementById( 'morse-output' )
	outputElement.value = text
	outputElement.scrollIntoView( { behavior: 'smooth', block: 'end' } )
}