(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7334:function(e,t,a){Promise.resolve().then(a.bind(a,5451))},5451:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var n=a(7437),r=a(2265),i=a(7712),s=a(8868),o=a(3336),l=a(6522),d=a(3622),c=a(1502),m=a(2167),u=a(9311);let p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)("div",{ref:t,className:(0,u.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...r})});p.displayName="Card";let g=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)("div",{ref:t,className:(0,u.cn)("flex flex-col space-y-1.5 p-6",a),...r})});g.displayName="CardHeader";let h=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)("h3",{ref:t,className:(0,u.cn)("text-2xl font-semibold leading-none tracking-tight",a),...r})});h.displayName="CardTitle";let f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)("p",{ref:t,className:(0,u.cn)("text-sm text-muted-foreground",a),...r})});f.displayName="CardDescription";let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)("div",{ref:t,className:(0,u.cn)("p-6 pt-0",a),...r})});x.displayName="CardContent";let v=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)("div",{ref:t,className:(0,u.cn)("flex items-center p-6 pt-0",a),...r})});v.displayName="CardFooter";var b=a(7256),y=a(9213);let j=(0,y.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),w=r.forwardRef((e,t)=>{let{className:a,variant:r,size:i,asChild:s=!1,...o}=e,l=s?b.g7:"button";return(0,n.jsx)(l,{className:(0,u.cn)(j({variant:r,size:i,className:a})),ref:t,...o})});w.displayName="Button";var N=a(6691),k=a.n(N),M=a(9172);function C(){let[e,t]=(0,r.useState)(""),[a,i]=(0,r.useState)([]),[s,o]=(0,r.useState)(!1),[l,d]=(0,r.useState)(null),c=(0,r.useRef)(null);(0,r.useEffect)(()=>{},[]);let m=async()=>{if(e){i(t=>[...t,"You: ".concat(e)]);try{let t=await fetch("https://chat-with-morgan.replit.app/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l?{message:e,conversation_id:l}:{message:e})});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));let a=await t.json();i(e=>[...e,"Bot: ".concat(a.response)]),!l&&a.conversation_id&&d(a.conversation_id)}catch(e){console.error("Error sending message:",e),i(e=>[...e,"Bot: Sorry, there was an error processing your request."])}t("")}};return(0,n.jsxs)("div",{ref:c,className:"fixed bottom-4 right-4 bg-slate-400 shadow-lg rounded-lg",draggable:!0,onDragStart:e=>{if(c.current){let{offsetTop:t,offsetLeft:a}=c.current;e.dataTransfer.setData("text/plain","".concat(a,",").concat(t))}},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let[t,a]=e.dataTransfer.getData("text/plain").split(",");c.current&&(c.current.style.left="".concat(e.clientX-parseInt(t),"px"),c.current.style.top="".concat(e.clientY-parseInt(a),"px"))},children:[(0,n.jsx)("img",{src:s?"/images/face.jpg":"/images/wave.jpg",alt:"Chat Icon",className:"w-16 h-16 cursor-pointer rounded-full",onClick:()=>o(!s)}),s&&(0,n.jsxs)("div",{className:"p-4 mt-2 w-64",children:[(0,n.jsx)("div",{className:"flex flex-col h-64 overflow-y-auto",children:a.map((e,t)=>(0,n.jsx)("div",{className:"mb-2 p-2 rounded-lg max-w-xs ".concat(e.startsWith("You:")?"bg-blue-500 text-white self-end":"bg-gray-300 text-black self-start"),children:e.replace(/^You: |^Bot: /,"")},t))}),(0,n.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),onKeyPress:e=>{"Enter"===e.key&&m()},className:"border rounded p-2 mt-2 w-full",placeholder:"Chat with me!"}),(0,n.jsx)("button",{onClick:m,className:"bg-blue-500 text-white rounded p-2 mt-2 w-full hover:bg-blue-600 transition-colors",children:"Send"})]})]})}var S=a(5482);let E=[{image:"/images/wave.jpg",tooltip:"About me: Computer Science and GIS student at UW-Madison"},{image:"/images/hand.jpg",tooltip:"Resume preview"},{image:"/images/face.jpg",tooltip:"GitHub: heyweol"},{image:"/images/confidence.jpg",tooltip:"LinkedIn: Morgan Liu"},{image:"/images/heart.jpg",tooltip:"Email: hliu746@wisc.edu"},{image:"/images/callme.jpg",tooltip:"Phone: 779-775-2283"}];function P(){return(0,n.jsx)(S.TooltipProvider,{children:(0,n.jsxs)("div",{className:"relative w-[500px] h-[500px] mx-auto mb-20",children:[(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,n.jsx)(k(),{src:"/images/me-with-cats.jpg",alt:"Morgan with cats",width:250,height:250,className:"rounded-full"})}),(0,n.jsx)("svg",{className:"absolute inset-0 w-full h-full",viewBox:"0 0 500 500",children:E.map((e,t)=>{let a=t/E.length*2*Math.PI,r=(t+1)/E.length*2*Math.PI,i=250+200*Math.cos(a),s=250+200*Math.sin(a),o=250+200*Math.cos(r),l=250+200*Math.sin(r);return(0,n.jsx)("path",{d:"M ".concat(i," ").concat(s," A ").concat(200," ").concat(200," 0 0 1 ").concat(o," ").concat(l),fill:"none",stroke:"#e5e7eb",strokeWidth:"2"},"arc-".concat(t))})}),E.map((e,t)=>{let a=t/E.length*2*Math.PI,r=200*Math.cos(a),i=200*Math.sin(a);return(0,n.jsx)("div",{className:"absolute w-20 h-20 transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-10",style:{transform:"translate(".concat(r+240,"px, ").concat(i+240,"px) translate(-50%, -50%)")},children:(0,n.jsxs)(S.Tooltip,{children:[(0,n.jsx)(S.TooltipTrigger,{children:(0,n.jsx)(k(),{src:e.image,alt:"Contact item ".concat(t+1),width:80,height:80,className:"rounded-full transition-all duration-300 ease-in-out hover:shadow-lg"})}),(0,n.jsx)(S.TooltipContent,{children:(0,n.jsx)("p",{children:e.tooltip})})]})},t)})]})})}let D=[{title:"Started My Journey",timeFrame:"Sept. 2021",description:"University of Wisconsin-Madison, Madison, WI",details:["B.S. in Computer Science, and Cartography and Geographic Information Systems (3.7/4)","Expected graduation: June 2026"]},{title:"Research Assistant",timeFrame:"May 2023 - Present",description:"Spatial Computing and Data Mining Lab at UWM, Madison, WI",details:["Full stack developed an interactive dynamic map web application with functional API service handling users' requests.","Dominated website development and UI design, continuously upgrading website and services according to needs of the research team and USDA clients.","Deployed machine learning models based on mass historical crop yield data and ran inference on cloud processing users' selected ROIs."]},{title:"Software Development Intern",timeFrame:"May - Aug 2023",description:"ByteDance, Beijing, China",details:["Contributed to LLM development in China, and participated in data processing and dataset building.","Worked on data collection by scraping, and ensured data quality through data cleaning, data fusion and data augmentation."]},{title:"USDA Crop Yield Prediction Website",timeFrame:"May 2023 - Present",description:"Full stack web development project",details:["Developed an interactive, dynamic website for geo-visualization of crop yield predictions.","Used Vue.js to rebuild responsive and high-performance front-end.","Deployed backend with RESTful API servers, allowing users to request data ad hoc and integrating deep learning models into the website.","Managed an SQL database (PostgreSQL/MySQL) for dynamic data storage and retrieval."],projectUrl:"https://heyweol.github.io/nifa-webdev/"},{title:'Fans\' Derivative Room Design Game ("Xinzhiju")',timeFrame:"May 2024 - Present",description:"Java-based cross-platform mini-game",details:["Developed an indie cross-platform mini-game with Java that allows players to extend room design experience from the original game, providing greater creative freedom.","Adept at game development workflow with game engine FXGL. UI design and implementation with a common UI framework like JavaFX.","Developed a community platform for users to register and share. Used a Postgres database managing users' design."]},{title:"GitHub Issue Hound",timeFrame:"Sept. 2023 - May 2024",description:"AI-powered bug discovery and analysis tool",details:["Developed a system to automate bug discovery and analysis in GitHub repositories, increasing users' contributions.","Built a Retrieval-Augmented Generation (RAG) system using LangChain's Multi-Agent workflow and a vector database, demonstrating proficiency in designing and implementing LLM-driven applications.","Implemented knowledge base management, enabling automated scraping and analysis of GitHub repositories to extract and assess project issues, files for bug identification.","Incorporated advanced multi-step reasoning techniques to conduct issue analysis, improving the precision of bug detection and root cause identification."]}],I=[{normal:"/images/2.png",expanded:"/images/1.png"},{normal:"/images/2.png",expanded:"/images/1.png"},{normal:"/images/2.png",expanded:"/images/1.png"},{normal:"/images/2.png",expanded:"/images/1.png"},{normal:"/images/2.png",expanded:"/images/1.png"},{normal:"/images/2.png",expanded:"/images/1.png"}];function R(e){let{setCurrentFocus:t,setExpandedIndex:a}=e,i=(0,r.useRef)(null),s=(0,r.useRef)(null),[u,g]=(0,r.useState)(0),[h,f]=(0,r.useState)(null),{scrollYProgress:x}=(0,l.v)({target:i,offset:["start end","end start"]}),v=(0,d.q)(x,{stiffness:200,damping:20,restDelta:.001}),b=(0,l.v)({target:s,offset:["start end","end start"]}),y=(0,c.H)(b.scrollYProgress,[0,1],["hsl(var(--background))","hsl(var(--foreground))"]),j=(0,c.H)(b.scrollYProgress,[0,1],["hsl(var(--foreground))","hsl(var(--background))"]);(0,r.useEffect)(()=>{let e=v.onChange(e=>{let a=Math.round(Math.max(0,Math.min(1,e))*(D.length-1));g(a),t(D[a].title)});return()=>e()},[v,t]);let N=e=>{let t=h===e?null:e;f(t),a&&a(t)};return(0,n.jsxs)("div",{ref:i,className:"relative mx-auto py-20",children:[(0,n.jsx)(P,{}),(0,n.jsx)("div",{className:"space-y-40",children:D.map((e,t)=>(0,n.jsxs)(o.E.div,{className:"relative",children:[(0,n.jsx)(o.E.div,{className:"absolute left-0 top-6 w-12 h-12 transform -translate-x-1/2",children:(0,n.jsx)(k(),{src:I[t]?h===t?I[t].expanded:I[t].normal:"/images/cat-face-1.png",alt:"Cat icon",width:48,height:48,className:"rounded-full"})}),(0,n.jsx)(o.E.div,{style:{opacity:1},children:(0,n.jsx)(p,{className:"ml-16 p-6 transition-all duration-300 cursor-pointer\n                  ".concat(u===t||h===t?"shadow-lg ring-2 ring-primary":"","\n                "),onClick:()=>N(t),children:(0,n.jsxs)(o.E.div,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300,damping:10},children:[(0,n.jsx)("h3",{className:"text-2xl font-semibold mb-2",children:e.title}),(0,n.jsx)("h4",{className:"text-xl font-medium mb-2",children:e.timeFrame}),(0,n.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:e.description}),(0,n.jsx)(m.M,{children:h===t&&(0,n.jsxs)(o.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"mt-4",children:[(0,n.jsx)("ul",{className:"list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-4",children:e.details.map((e,t)=>(0,n.jsx)("li",{children:e},t))}),e.projectUrl&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mt-4 aspect-video w-full",children:(0,n.jsx)("iframe",{src:e.projectUrl,className:"w-full h-full border-0 rounded-md",title:"Project: ".concat(e.title),allowFullScreen:!0})}),(0,n.jsx)("div",{className:"mt-4 text-center",children:(0,n.jsx)(w,{onClick:t=>{t.stopPropagation(),window.open(e.projectUrl,"_blank")},className:"bg-primary text-primary-foreground hover:bg-primary/90",children:"Open the Project Site"})})]})]})})]})})})]},t))}),(0,n.jsx)("div",{className:"mt-40 pt-20 border-t border-gray-200 dark:border-gray-700",children:(0,n.jsxs)(o.E.div,{ref:s,style:{backgroundColor:y,color:j},className:"p-6 rounded-lg max-w-sm mx-auto shadow-md",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-3",children:"Contact Me"}),(0,n.jsxs)("div",{className:"space-y-2 text-sm",children:[(0,n.jsx)("p",{className:"font-semibold",children:"Morgan(Haiyue) Liu"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"mailto:hliu746@wisc.edu",className:"hover:underline font-normal",children:"hliu746@wisc.edu"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"mailto:haiyueliu746@gmail.com",className:"hover:underline",children:"haiyueliu746@gmail.com"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"font-semibold",children:"Phone:"})," 779-775-2283"]}),(0,n.jsx)("div",{className:"flex space-x-4 mt-3",children:(0,n.jsxs)("div",{className:"flex space-x-2",children:[(0,n.jsx)("a",{href:"https://github.com/heyweol",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(M.hJX,{className:"text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",size:24})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/morgan-liu-b056b3262/",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(M.ltd,{className:"text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200",size:24})})]})})]})]})}),(0,n.jsx)(C,{})]})}function T(){let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{t(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsx)(o.E.header,{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(e?"bg-background/80 backdrop-blur-sm shadow-md":""),initial:{y:-100},animate:{y:0},transition:{type:"spring",stiffness:300,damping:30},children:(0,n.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold",children:"Haiyue (Morgan) Liu"}),(0,n.jsx)("nav",{children:(0,n.jsx)(w,{variant:"ghost",className:"mr-2",onClick:()=>window.open("/resume-Haiyue-Liu.pdf","_blank"),children:"Resume"})})]})})}function L(){let e=(0,i._)(),t=(0,r.useRef)(null),a=(0,s.Y)(t),[l,d]=(0,r.useState)("Started My Journey"),[c,m]=(0,r.useState)(null);return(0,r.useEffect)(()=>{a&&e.start("visible")},[e,a]),(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsx)(T,{}),(0,n.jsx)("div",{className:"container mx-auto px-4 py-8 pt-24 relative",children:(0,n.jsxs)(o.E.div,{ref:t,animate:e,initial:"hidden",variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:50}},transition:{duration:.5},className:"w-full max-w-2xl mx-auto",children:[(0,n.jsx)(R,{setCurrentFocus:d,setExpandedIndex:m})," "]})})]})}},5482:function(e,t,a){"use strict";a.r(t),a.d(t,{Tooltip:function(){return l},TooltipContent:function(){return c},TooltipProvider:function(){return o},TooltipTrigger:function(){return d}});var n=a(7437),r=a(2265),i=a(480),s=a(9311);let o=i.zt,l=i.fC,d=i.xz,c=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...o}=e;return(0,n.jsx)(i.VY,{ref:t,sideOffset:r,className:(0,s.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...o})});c.displayName=i.VY.displayName},9311:function(e,t,a){"use strict";a.d(t,{cn:function(){return i}});var n=a(7042),r=a(4769);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,n.W)(t))}}},function(e){e.O(0,[699,859,546,971,864,744],function(){return e(e.s=7334)}),_N_E=e.O()}]);