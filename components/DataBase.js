const db = {
	nameWebsite: "CMS",
	user: {
		id: 0,
		name: "Rafael Câmara",
		role: "Intern - Job Rotation",
		picture: "images/perfil.png"
	},
	allUsers: [
		{
			id: 0,
			name: "Rafael Câmara",
			role: "Intern - Job Rotation",
			picture: "images/perfil.png"
		},
		{
			id: 1,
			name: "Diogo Perillo",
			role: "UI",
			picture: "images/perfil.png"
		},
		{
			id: 2,
			name: "Igor Ribeiro",
			role: "UI",
			picture: "images/perfil.png"
		}
	],
	menuData: [
		{
			label: "Dashboard", 
			icon: "picture_in_picture",
			href: "index.html",
			isDropdown: "true"
		},
		{
			label: "Posts", 
			icon: "note_add",
			href: "posts.html",
			isDropdown: "false"
		},
		{
			label: "Category", 
			icon: "library_books",
			href: "page.html",
			isDropdown: "false"
		},
		{
			label: "Users", 
			icon: "supervisor_account",
			href: "page.html",
			isDropdown: "false"
		},
		{
			label: "Groups", 
			icon: "store",
			href: "page.html",
			isDropdown: "false"
		},
		{
			label: "Statics", 
			icon: "insert_chart",
			href: "page.html",
			isDropdown: "false"
		},
		{
			label: "Settings", 
			icon: "settings",
			href: "page.html",
			isDropdown: "false"
		}
    ],
	lastIdPost: 0,
	numberOfChats: 1,
	numberOfNotifications: 5,
	category: [
		"The Opinion Pages",
		"RIO 2016",
		"Síria",
		"News"
	],
	posts: [
		{
			id: 0,
			type: "play_arrow",
			title: "The Clear and Present Danger of Donald Trump 2",
			category: "The Opinion Pages",
			description: "Obama shed his famous reserve to compare Trump to America’s great enemies, in a sign of rising — and appropriate — alarm."
		}
	]	
} 

export default {
	
	getItensMenu: () => {
		return(db.menuData)
	},
	
	getNameWebsite: () => {
		return (db.nameWebsite)
	},
	
	getUser: () => {
		return (db.user)
	},
	
	getUserName: () => {
		return (db.user.name)
	},
	
	getNumberOfChats: () => {
		return (db.numberOfChats)
	},
	
	getNumberOfNotifications: () => {
		return (db.numberOfNotifications)
	},
	
	insertNewChat: () => {
		db.numberOfChats = (db.numberOfChats + 1)
	},
	
	addPost: (post) => {
		post.id = (db.posts.length)
		db.posts.push(post)
	},
	
	getPosts: () => {
		return(db.posts)
	},
	
	getLastIdPost: () => {
		return(db.lastIdPost)
	}
	
}