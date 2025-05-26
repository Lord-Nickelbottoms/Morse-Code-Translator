document.addEventListener( 'DOMContentLoaded', () =>
{
	const hackerText = document.getElementById( 'hacker-text' )
	const clones = document.querySelectorAll( '.glitch-clone' )

	// Randomize text occasionally
	function randomizeText ()
	{
		const originalText = "_MORSE_CODE_TRANSLATOR"
		let randomized = originalText.split( '' ).map( char =>
		{
			if ( Math.random() > 0.9 )
			{
				return String.fromCharCode( 33 + Math.floor( Math.random() * 94 ) )
			}
			return char
		} ).join( '' )

		hackerText.textContent = randomized
		clones[ 1 ].textContent = randomized

		// Occasionally add more intense glitches
		if ( Math.random() > 0.7 )
		{
			gsap.to( clones, {
				duration: 0.1,
				x: () => Math.random() * 10 - 5,
				y: () => Math.random() * 10 - 5,
				opacity: () => Math.random() * 0.8,
				stagger: 0.05,
				onComplete: () =>
				{
					gsap.to( clones, {
						duration: 0.2,
						x: 0,
						y: 0,
						opacity: 0.8
					} )
				}
			} )
		}

		// Schedule next randomization
		setTimeout( randomizeText, Math.random() * 1000 + 200 )
	}

	// Initial animation
	gsap.from( [ hackerText, ...clones ], {
		duration: 2,
		opacity: 0,
		y: 50,
		ease: "power3.out",
		stagger: 0.1,
		onComplete: randomizeText
	} )

	// Continuous subtle glitch effect
	gsap.to( clones, {
		duration: 0.5,
		x: () => Math.random() * 4 - 2,
		y: () => Math.random() * 4 - 2,
		opacity: () => 0.5 + Math.random() * 0.3,
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut"
	} )

	// Binary rain effect in background
	createBinaryRain()
} )

function createBinaryRain ()
{
	const container = document.querySelector( 'body' )
	const chars = "01"

	for ( let i = 0; i < 50; i++ )
	{
		const element = document.createElement( 'div' )
		element.className = 'binary-char'
		element.textContent = chars[ Math.floor( Math.random() * chars.length ) ]
		element.style.position = 'absolute'
		element.style.color = 'rgba(0, 255, 0, 0.5)'
		element.style.fontSize = ( Math.random() * 10 + 10 ) + 'px'
		element.style.left = Math.random() * 100 + 'vw'
		element.style.top = '-20px'
		container.appendChild( element )

		animateBinaryChar( element )
	}
}

function animateBinaryChar ( element )
{
	const duration = Math.random() * 5 + 3
	const delay = Math.random() * 5

	gsap.to( element, {
		y: '150vh',
		duration: duration,
		delay: delay,
		ease: 'none',
		onComplete: () =>
		{
			element.style.top = '-20px'
			element.style.left = Math.random() * 100 + 'vw'
			element.textContent = Math.random() > 0.5 ? '0' : '1'
			animateBinaryChar( element )
		}
	} )

	// Randomly change the character during fall
	setInterval( () =>
	{
		if ( Math.random() > 0.8 )
		{
			element.textContent = element.textContent === '0' ? '1' : '0'
		}
	}, 200 )
}