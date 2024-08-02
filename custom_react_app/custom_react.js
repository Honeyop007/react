function renderElement(root,element)
{
const ele = document.createElement(element.type)

ele.innerHTML= element.children;
ele.setAttribute(`href`,element.props.href);
ele.setAttribute(`target`,element.props.target);
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

const root = document.querySelector(`#root`);

renderElement(root,reactElement)

