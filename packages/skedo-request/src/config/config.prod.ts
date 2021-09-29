import { ConfigAttributes } from "./ConfigAttributes";

const config : ConfigAttributes = {
	pageUrl: (user ? : string, name ? : string) => {
		if(!name) {
			return "https://api.skedo.cn/doc/page"
		}
		return `https://api.skedo.cn/doc/page/${user}/${name}`
	},
	uploadFileObject : "https://api.skedo.cn/upload/by-object",
	uploadFileText : `https://api.skedo.cn/upload/by-content`,
	componentUrl : (user ? : string, group? : string, name? : string) => {
		if(!group || !name || !user) {
			return "https://api.skedo.cn/doc/component "
		}
		return `http://api.skedo.cn/component/${user}/${group}/${name}`
	},
	codeProjectURL : (user : string, name : string) => {
		return `https://api.skedo.cn/code-project/${user}/${name}` 
	},
	codeProjectBuildURL : (user : string, name : string) => {
		return `https://api.skedo.cn/runtime/build/${user}/${name}`
	}
}

export default config