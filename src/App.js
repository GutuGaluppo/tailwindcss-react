import React from 'react';
import Portrait from './assets/images/gutu_portrait.png';

function App() {
	const bubbleStyle = `
		inline-block
		border-2
		border-yellow-300
		rounded-full 
		px-3 
		py-2 
		text-sm 
		font-semibold 
		text-yellow-100 
		m-2
	`;
	return (
		<div className="bg-gradient-to-br from-gray-800 to-gray-900">
			<nav className="grid grid-cols-2 text-gray-100 p-8 bg-gray-900">
				<div>Ga//uPPo</div>
				<ul className="flex justify-evenly">
					<li>
						<a href="#" className="">
							Work
							</a>
					</li>
					<li>
						<a href="#" className="">
							Blog
							</a>
					</li>
					<li>
						<a href="#" className="">
							About
							</a>
							</li>
				</ul>
			</nav>

			<div className="p-10">
				<div className="m-auto max-w-md rounded-3xl overflow-hidden shadow-neumorphic">
					<img className="w-auto px-10" src={Portrait} alt="Gutu Galuppo Portrait" />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">
							<span className="bg-clip-text text-transparent bg-gradient-to-l from-yellow-300 to-blue-400">
								Gutu Galuppo
						</span>
						</div>

						<h1 className="text-6xl my-10 font-bold">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-500">
								Greetings from Tailwind v2.0.1
  					</span>
						</h1>
						<h4 class="font-sans italic text-3xl font-bold mt-4">
							<span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
								&ldquo;Before you marry a person, you should first make them use a computer
								with slow internet service to see who they really are.&rdquo;
						</span>
						</h4>
					</div>
					<div className="flex flex-wrap p-4">
						<span className={bubbleStyle}>#Software Developer</span>
						<span className={bubbleStyle}>#Desinger</span>
						<span className={bubbleStyle}>#Music</span>
						<span className={bubbleStyle}>#Cook</span>
						<span className={bubbleStyle}>#Playing cards</span>
						<span className={bubbleStyle}>#Draw</span>
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;