function Insert_CustomReact(template,container){
    // const Self_created_Dom=document.createElement(template.type);
    // Self_created_Dom.innerHTML=template.children;
    // Self_created_Dom.setAttribute('href',template.props.href);
    // Self_created_Dom.setAttribute('target',template.props.target);
    // container.appendChild(Self_created_Dom);
    const Self_created_Dom=document.createElement(template.type);
    Self_created_Dom.innerHTML=template.children;
    for (const prop in template.props) {
      if(prop==='children') continue;
      Self_created_Dom.setAttribute(prop,template.props[prop]);
    }
    container.appendChild(Self_created_Dom);
}


const maincontainer=document.querySelector('#root');
const customreact={
    type:'a',
    props:{
        href:'htttps://google.com',
        target:'_blank'
    },
    children:'Click Me'
}
Insert_CustomReact(customreact,maincontainer);