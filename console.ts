/**
 * 控制台标识
 * @description 没什么用 作为系统的标识
 * @date 2021年10月7日23:16:44
 */
const processChromeConole = () => {
  console.log(
    `%c
     ______   ________   ______   _________  
    /_____/\\ /_______/\\ /_____/\\ /________/\\ 
    \\::::_\\/_\\::: _  \\ \\\\::::_\\/_\\__.::.__\\/ 
     \\:\\/___/\\\\::(_)  \\ \\\\:\\/___/\\  \\::\\ \\   
      \\:::._\\/ \\:: __  \\ \\\\_::._\\:\\  \\::\\ \\  
       \\:\\ \\    \\:.\\ \\  \\ \\ /____\\:\\  \\::\\ \\ 
        \\_\\/     \\__\\/\\__\\/ \\_____\\/   \\__\\/ 
        
     欢迎调试 Fast Admin version:Vue 3.0.2 TypeScript 4.3.5
     
     by:lastly 2021年10月4日16:32:54
    `, "color:green"
  )
}
/**
 * 启动日志banner配置 作用在启动前输出一个banner日志
 */
const runtimeDate = new Date()
const log = `
    ______   ________   ______   _________  
    /_____/\\ /_______/\\ /_____/\\ /________/\\ 
    \\::::_\\/_\\::: _  \\ \\\\::::_\\/_\\__.::.__\\/ 
    \\:\\/___/\\\\::(_)  \\ \\\\:\\/___/\\  \\::\\ \\   
      \\:::._\\/ \\:: __  \\ \\\\_::._\\:\\  \\::\\ \\  
      \\:\\ \\    \\:.\\ \\  \\ \\ /____\\:\\  \\::\\ \\ 
        \\_\\/     \\__\\/\\__\\/ \\_____\\/   \\__\\/ 
        
      runtime-date:${runtimeDate}
 `

process.stdout.write('\n');

console.log(log)