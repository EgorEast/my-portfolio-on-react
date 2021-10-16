import React from 'react';
import Project from '../components/Project';

const testTasksItems = [
	{
		title: 'Memory game',
		about: 'This is a game, in which i need to open all couples of tiles.',
		model: null,
		usedTechnologies: [
			'React',
			'React-Redux & Redux-toolkit',
			`Package manager yarn`,
		],
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/memory-game',
			},
			{
				content: 'Developed on CodeSandbox',
				href: 'https://codesandbox.io/s/memory-game-uv7vx',
			},
			{
				content: 'Open project',
				href: 'https://memory-game-slobodskoy.herokuapp.com/',
			},
		],
	},
	{
		title: 'Youtube search',
		about: 'Search of video and preservation of a search query in storage.',
		model: null,
		usedTechnologies: [
			'UI-library AntDesign',
			'React',
			'React-Redux & Redux-toolkit',
			'React-Router',
			'Axios',
			`Package manager yarn`,
		],
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/youtube-search',
			},
			{
				content: 'Developed on CodeSandbox',
				href: 'https://codesandbox.io/s/youtube-search-vv7ix',
			},
			{
				content: 'Open project',
				href: 'https://youtube-search-slobodskoy.netlify.app/',
			},
		],
	},
	{
		title: 'Beco',
		about: 'Imposition of the page on the model without use of libraries.',
		model: { content: 'on Figma', href: 'https://tinyurl.com/y4nxp4wt' },
		usedTechnologies: [
			'Webpack & plugins',
			'JavaScript',
			'Scss',
			`Package manager npm`,
		],
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/beco',
			},
			{
				content: 'Developed on CodeSandbox',
				href: 'https://codesandbox.io/s/beco-0ixu3',
			},
			{
				content: 'Open project',
				href: 'https://beco-slobodskoy.netlify.app/',
			},
		],
	},
	{
		title: 'CRUD-UI',
		about: '',
		model: { content: 'on Figma', href: 'https://tinyurl.com/y4nxp4wt' },
		usedTechnologies: ['React', 'Axios', 'Scss', `Package manager npm`],
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/crud-ui',
			},
			{
				content: 'Open project',
				href: 'https://crud-ui-slobodskoy.herokuapp.com/',
			},
		],
	},
];

const petProjectsItems = [
	{
		title: 'Current time',
		about:
			'This is a simple project in which I applied initial knowlage of css and worked with time and DOM-tree in js.',
		model: null,
		usedTechnologies: ['JavaScript', 'CSS'],
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/MyPetProjectsJS/tree/main/Projects/CurrentTime',
			},
			{
				content: 'Open project',
				href: 'https://current-time-slobodskoy.netlify.app/',
			},
		],
	},
	{
		title: 'Form with validation',
		about:
			'Simple form in which I for the first time worked with React library and applied regular expressions.',
		model: null,
		usedTechnologies: ['React', 'CSS'],
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/MyPetProjectsJS/tree/main/Projects/Form',
			},
			{
				content: 'Open project',
				href: 'https://form-slobodskoy.netlify.app/',
			},
		],
	},
	{
		title: 'Voting system',
		about:
			'Simple project in which I studied work of the React with jsx as a marking.',
		model: null,
		usedTechnologies: ['React', 'Prop-Types', 'CSS'],
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/MyPetProjectsJS/tree/main/Projects/voting-system',
			},
			{
				content: 'Open project',
				href: 'https://voting-system-slobodskoy.netlify.app/',
			},
		],
	},
];

const landingPages = [
	{
		title: 'Pied Piper',
		about: null,
		model: {
			content: 'on Figma',
			href: 'https://www.figma.com/file/BL7wdCOSIxYFu1uxctuVzg/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B5%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Pied-Piper?node-id=0%3A1',
		},
		usedTechnologies: null,
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/LandingPages/tree/main/Stepik/Pied%20Piper',
			},
			{
				content: 'Open project',
				href: 'https://pied-piper-stepik-slobodskoy.netlify.app/',
			},
		],
	},
	{
		title: '"Portfolio"',
		about: null,
		model: null,
		usedTechnologies: null,
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/LandingPages/tree/main/Stepik/Learn%20BOOTSTRAP',
			},
			{
				content: 'Open project',
				href: 'https://portfolio-stepik-slobodskoy.netlify.app/',
			},
		],
	},
	{
		title: '"Final Project"',
		about: null,
		model: {
			content: 'on Figma',
			href: 'https://www.figma.com/file/8lxQ3PGYTHQsCgTXnEJre8/Uber-Eats',
		},
		usedTechnologies: null,
		links: [
			{
				content: 'On GitHub',
				href: 'https://github.com/EgorEast/LandingPages/tree/main/Stepik/Final%20Project',
			},
			{
				content: 'Open project',
				href: 'https://final-project-stepik-slobodskoy.netlify.app/',
			},
		],
	},
];

const PortfolioPage = () => {
	return (
		<>
			<section className='test-tasks-section'>
				<h2>Test tasks</h2>
				<div className='container'>
					{testTasksItems.map((item, index) => {
						return (
							<Project
								index={index}
								title={item.title}
								about={item.about}
								model={item.model}
								usedTechnologies={item.usedTechnologies}
								links={item.links}
							/>
						);
					})}
				</div>
			</section>
			<section className='pet-projects-section'>
				<h2>Pet projects</h2>
				<div className='container'>
					{petProjectsItems.map((item, index) => {
						return (
							<Project
								index={index}
								title={item.title}
								about={item.about}
								model={item.model}
								usedTechnologies={item.usedTechnologies}
								links={item.links}
							/>
						);
					})}
				</div>
				<p className='link-on-folder'>
					Pet projects{' '}
					<a
						href='https://github.com/EgorEast/MyPetProjectsJS'
						target='_blank'
						rel='noreferrer'
					>
						on GitHub
					</a>
				</p>
			</section>
			<section className='landing-pages-section'>
				<h2>Landing Pages:</h2>
				<div className='container'>
					{landingPages.map((item, index) => {
						return (
							<Project
								index={index}
								title={item.title}
								about={item.about}
								model={item.model}
								usedTechnologies={item.usedTechnologies}
								links={item.links}
							/>
						);
					})}{' '}
				</div>
				<p className='link-on-folder'>
					Landing Pages{' '}
					<a
						href='https://github.com/EgorEast/LandingPages'
						target='_blank'
						rel='noreferrer'
					>
						on GitHub
					</a>
				</p>
			</section>
		</>
	);
};

export default PortfolioPage;
