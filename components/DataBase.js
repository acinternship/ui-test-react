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
			picture: "images/perfil.png",
			status: 0
		},
		{
			id: 1,
			name: "Diogo Perillo",
			role: ".NET Engineer",
			picture: "images/perfil.png",
			status: 0
		},
		{
			id: 2,
			name: "Igor Ribeiro",
			role: "UI Engineer",
			picture: "images/perfil.png",
			status: 0
		},
		{
			id: 3,
			name: "Gabriel Bessa",
			role: "Intern - Job Rotation",
			picture: "images/perfil.png",
			status: 0
		},
		{
			id: 4,
			name: "Louise Bordeaux",
			role: "Intern - Job Rotation",
			picture: "images/perfil.png",
			status: 0
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
			href: "category.html",
			isDropdown: "false"
		},
		{
			label: "Users", 
			icon: "supervisor_account",
			href: "users.html",
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
		{
			id: 0,
			label: "The Opinion Pages",
			status: 0
		},
		{
			id: 1,
			label: "RIO 2016",
			status: 0
		},
		{
			id: 2,
			label: "Síria",
			status: 0
		},
		{
			id: 3,
			label: "News",
			status: 0
		}
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
	
	getAllUsers: () => {
		return(db.allUsers)
	},
	deleteUser: (id) => {
		db.allUsers[id].status = 1
		console.log(db.allUsers)
	},
	
	addCategory: (category) => {
		category.id = (db.category.length)
		db.category.push(category)
	},
	
	deleteCategory: (id) => {
		var categoryList = db.category
		categoryList[id].status = 1
	},
	getCategoryList: () => {
		return(db.category)
	},
	
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