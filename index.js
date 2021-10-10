const app = require("./app")
require("./database")

async function main(){

	await app.listen(app.get("PORT"))
	console.log("App running on port ", app.get("PORT"))
}

main()





