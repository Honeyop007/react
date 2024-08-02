function renderElement(root,element)
{
const ele = document.createElement(element.type)

ele.innerHTML= element.children;


for (const prop in element.props) {
if (prop==='children') continue
    ele.setAttribute(prop,element.props[prop])
}


root.appendChild(ele)
}

const reactElement = {
    type : 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click on me to visit Google'
}

const root = document.querySelector('#root');

renderElement(root,reactElement)

