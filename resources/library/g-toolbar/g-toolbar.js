


class dgToolbar extends HTMLElement {

shows = [];
dgToolbar = this;
constructor(){
    super();
    let dgToolbar = this;
}

connectedCallback(){
let dgToolbar = this.dgToolbar;
    dgToolbar.style.display = "grid";
    dgToolbar.style.gridTemplateRows = "50% 50%";
  //  dgToolbar.style.gridAutoColumns = "max-content";

    dgToolbar.style.gridTemplateColumns = "max-content max-content max-content max-content auto max-content";

    dgToolbar.style.gridAutoFlow = "column dense";
    dgToolbar.style.position = "relative";

    dgToolbar.observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry,i,a){
            if(entry.isIntersecting){
            entry.target["isShow"] = true;
            entry.target.style.zIndex=1
            setTimeout(() => {
                 entry.target.style.opacity = 1;
            },100);
         
            let showMenuIcon = (Array.from(entry.target.closest("dg-toolbar-menu").querySelectorAll("dg-toolbar-menu-item")).map(e=>eval(e.isShow)).includes(false))
            
            if(!showMenuIcon){
entry.target.closest("dg-toolbar").querySelector("dg-toolbar-menu-icon").style.display="none";
            }else{
entry.target.closest("dg-toolbar").querySelector("dg-toolbar-menu-icon").style.display="flex";                     
            }
                    
            }else{
            entry.target["isShow"] = false;
            entry.target.style.zIndex=-1000;
            setTimeout(() => {
                entry.target.style.opacity = 0;
           },100);

           let showMenuIcon = (Array.from(entry.target.closest("dg-toolbar-menu").querySelectorAll("dg-toolbar-menu-item")).map(e=>eval(e.isShow)).includes(false))
            
            if(!showMenuIcon){
entry.target.closest("dg-toolbar").querySelector("dg-toolbar-menu-icon").style.display="none";
            }else{
entry.target.closest("dg-toolbar").querySelector("dg-toolbar-menu-icon").style.display="flex";                     
            }

            }

           

             
        })
    },{root:dgToolbar,rootMargin:"0px",threshold:1})




}
};

/* ICON */
window.customElements.define("dg-toolbar-icon",class dgIcon extends dgToolbar {

    dgIcon = this;
    src = null;
    
    constructor(){
        super();
        let dgIcon = this;
    }
    
    connectedCallback(){
    let dgIcon = this.dgIcon;
    if(dgIcon.closest("dg-toolbar").querySelectorAll("dg-toolbar-icon").length > 1){
        dgIcon.remove();
    }else{
        dgIcon.style.opacity = 0;
        dgIcon.style.display = "flex";
        dgIcon.style.justifySelf = "center";
        dgIcon.style.alignSelf = "center";
        dgIcon.style.gridColumn = "1/2";
        dgIcon.style.gridRow = "1/3";
    
        if(dgIcon.hasAttribute("src")){
             let img = document.createElement("img");
             dgIcon.src=dgIcon.getAttribute("src");
             img.src = dgIcon.src;
             img.onload=function(){
                dgIcon.appendChild(img);
                dgIcon.style.height = `calc(100% * ${dgIcon.hasAttribute("scale")?dgIcon.getAttribute("scale"):1})`;
                dgIcon.style.opacity = 1;
             }
        }
    }
    }
    static get observedAttributes(){
        return ['src'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        let dgIcon = this.dgIcon;
      
    
            switch(name){
        case "src":
            try {
                 dgIcon.querySelector("img").src = newValue;
            } catch (error) {}
        break;
      }
        
      
    }
    
    });
/* LOGO */
window.customElements.define("dg-toolbar-logo",class dgLogo extends dgToolbar {

dgLogo = this;
src = null;

constructor(){
    super();
    let dgLogo = this;
}

connectedCallback(){
let dgLogo = this.dgLogo;
if(dgLogo.closest("dg-toolbar").querySelectorAll("dg-toolbar-logo").length > 1){
    dgLogo.remove();
}else{
    dgLogo.style.opacity = 0;
    dgLogo.style.display = "flex";
    dgLogo.style.justifySelf = "center";
    dgLogo.style.alignSelf = "center";
    dgLogo.style.gridColumn = "2/3";
    dgLogo.style.gridRow = "1/3";

    if(dgLogo.hasAttribute("src")){
         let img = document.createElement("img");
         dgLogo.src=dgLogo.getAttribute("src");
         img.src = dgLogo.src;
         img.onload=function(){
            dgLogo.appendChild(img);
            dgLogo.style.height = `calc(100% * ${dgLogo.hasAttribute("scale")?dgLogo.getAttribute("scale"):1})`;
            dgLogo.style.opacity = 1;
         }
    }
}
}
static get observedAttributes(){
    return ['src'];
}

attributeChangedCallback(name, oldValue, newValue) {
    let dgLogo = this.dgLogo;
  

        switch(name){
    case "src":
        try {
             dgLogo.querySelector("img").src = newValue;
        } catch (error) {}
    break;
  }
    
  
}

});



window.customElements.define("dg-toolbar-title",class dgTitle extends dgToolbar {

    dgTitle = this;
    
    constructor(){
        super();
        let dgTitle = this;
    }
    
    connectedCallback(){
    let dgTitle = this;

    if(dgTitle.closest("dg-toolbar").querySelectorAll("dg-toolbar-title").length > 1){
        dgTitle.remove();
    }else{

    dgTitle.style.opacity = 0;
    dgTitle.style.display = "flex";
    let dgToolbar = dgTitle.closest("dg-toolbar");

setTimeout(() => {
    
        if(dgToolbar.querySelector("dg-toolbar-subtitle")!=null){

           
            dgTitle.style.gridColumn = "3/4";
            dgTitle.style.gridRow = "1/2";
            dgTitle.style.justifyContent = "start";
            dgTitle.style.alignItems = "center";

            setTimeout(() => {
                dgTitle.style.opacity = 1;
            });
            
        }else{
            dgTitle.style.gridColumn = "3/4";
            dgTitle.style.gridRow = "1/3";
            dgTitle.style.justifyContent = "start";
            dgTitle.style.alignItems = "center";

            setTimeout(() => {
                dgTitle.style.opacity = 1;
            });
            
        }
 });
   
    }
    }

});


window.customElements.define("dg-toolbar-subtitle",class dgSubtitle extends dgToolbar {

    dgSubtitle = this;
    
    constructor(){
        super();
        let dgSubtitle = this;
    }
    
    connectedCallback(){
    let dgSubtitle = this;
    if(dgSubtitle.closest("dg-toolbar").querySelectorAll("dg-toolbar-subtitle").length > 1){
        dgSubtitle.remove();
    }else{
    dgSubtitle.style.opacity = 0;
    dgSubtitle.style.display = "flex";
    

   

    let dgToolbar = dgSubtitle.closest("dg-toolbar");
    
setTimeout(() => {
        
        if(dgToolbar.querySelector("dg-toolbar-title")!=null){
            dgSubtitle.style.gridColumn = "3/4";
            dgSubtitle.style.gridRow = "2/3";
            dgSubtitle.style.justifyContent = "start";
            dgSubtitle.style.alignItems = "center";

            setTimeout(() => {
                dgSubtitle.style.opacity = 1;
            });
            
        }else{
            dgSubtitle.style.gridColumn = "3/4";
            dgSubtitle.style.gridRow = "1/3";
            dgSubtitle.style.justifyContent = "start";
            dgSubtitle.style.alignItems = "center";

            setTimeout(() => {
                dgSubtitle.style.opacity = 1;
            });
            
        }
 });
        
    }
    }

});




/* MENU */

class dgMenu extends dgToolbar {

    dgMenu = this;
    
    constructor(){
        super();
        let dgMenu = this;
    }
    
    connectedCallback(){
    let dgMenu = this;
    if(dgMenu.closest("dg-toolbar").querySelectorAll("dg-toolbar-menu").length > 1){
        dgMenu.remove();
    }else{
    dgMenu.style.opacity = 0;
    dgMenu.style.display = "flex";
    dgMenu.style.justifyContent = "start";
    dgMenu.style.position = "relative";
    


    let dgToolbar = dgMenu.closest("dg-toolbar");
    
setTimeout(() => {
            dgMenu.style.overflow = "hidden";
            dgMenu.style.width = "auto";
            dgMenu.style.height = "100%";
            dgMenu.style.gridColumn = "5/6";
            dgMenu.style.gridRow = "1/3";
            dgMenu.style.justifyContent = "end";
            dgMenu.style.alignItems = "center";

            setTimeout(() => {
                dgMenu.style.opacity = 1;
            });
            
 });
        
    }
    }

};



/* MENU ITEM */

customElements.define("dg-toolbar-menu-item",class dgMenuItem extends dgToolbar {

    dgMenuItem = this;
    
    constructor(){
        super();
        let dgMenuItem = this;
    }
    
    connectedCallback(){

    let dgMenuItem = this;

   
    
    dgMenuItem.style.opacity = 0;
    dgMenuItem.style.display = "flex";
    dgMenuItem.style.justifyContent = "center";
    dgMenuItem.style.alignItems = "center";
    dgMenuItem.style.position = "relative";

    dgMenuItem.style.marginLeft = getComputedStyle(dgMenuItem).getPropertyValue("margin-left")=="0px"?"10px":getComputedStyle(dgMenuItem).getPropertyValue("margin-left");
    dgMenuItem.style.marginRight = getComputedStyle(dgMenuItem).getPropertyValue("margin-right")=="0px"?"10px":getComputedStyle(dgMenuItem).getPropertyValue("margin-right");
 
    dgMenuItem["isShow"] = false
    dgMenuItem.closest("dg-toolbar").observer.observe(dgMenuItem);
  
    
setTimeout(() => {
            dgMenuItem.style.height = "100%";
           }); }

});


/* ITEM MENU ICON */
window.customElements.define("dg-toolbar-menu-item-icon",class dgMenuItemIcon extends dgToolbar {

    dgMenuItemIcon = this;
    src = null;
    
    constructor(){
        super();
        let dgMenuItemIcon = this;
    }
    
    connectedCallback(){
    let dgMenuItemIcon = this.dgMenuItemIcon;
   
        dgMenuItemIcon.style.opacity = 0;
        dgMenuItemIcon.style.display = "flex";
        dgMenuItemIcon.style.position = "relative";
        dgMenuItemIcon.style.gridRow = "1/2";
        dgMenuItemIcon.style.marginLeft = "2.5px";
        dgMenuItemIcon.style.marginRight = "2.5px";
        dgMenuItemIcon.style.display = (dgMenuItemIcon.getAttribute("show")=="false"?"none":"flex");
    
        if(dgMenuItemIcon.hasAttribute("src")){
             let img = document.createElement("img");
             dgMenuItemIcon.src=dgMenuItemIcon.getAttribute("src");
             img.src = dgMenuItemIcon.src;
             img.style.height = "100%"
             img.onload=function(){
                dgMenuItemIcon.appendChild(img);
                dgMenuItemIcon.style.height = `calc(100% * ${dgMenuItemIcon.hasAttribute("scale")?dgMenuItemIcon.getAttribute("scale"):1})`;
                dgMenuItemIcon.style.opacity = 1;

             }
        }
    
    }
    static get observedAttributes(){
        return ['src'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        let dgMenuItemIcon = this.dgMenuItemIcon;
        
      
    
            switch(name){
        case "src":
            try {
                 dgMenuItemIcon.querySelector("img").src = newValue;
            } catch (error) {}
        break;
      }
        
      
    }
    
    });



    /* LOGO */
window.customElements.define("dg-toolbar-menu-icon",class dgMenuIcon extends dgToolbar {

    dgMenuIcon = this;
    src = null;
    
    constructor(){
        super();
        let dgMenuIcon = this;
    }
    
    connectedCallback(){
    let dgMenuIcon = this.dgMenuIcon;
    if(dgMenuIcon.closest("dg-toolbar").querySelectorAll("dg-toolbar-menu-icon").length > 1){
        dgMenuIcon.remove();
    }else{
        dgMenuIcon.style.opacity = 0;
        dgMenuIcon.style.display = "flex";
        dgMenuIcon.style.justifySelf = "center";
        dgMenuIcon.style.alignSelf = "center";
        dgMenuIcon.style.gridColumn = "6/7";
        dgMenuIcon.style.gridRow = "1/3";
       
    
        if(dgMenuIcon.hasAttribute("src")){
             let img = document.createElement("img");
             dgMenuIcon.src=dgMenuIcon.getAttribute("src");
             img.src = dgMenuIcon.src;
             img.onload=function(){
                dgMenuIcon.appendChild(img);
                dgMenuIcon.style.height = `calc(100% * ${dgMenuIcon.hasAttribute("scale")?dgMenuIcon.getAttribute("scale"):1})`;
                dgMenuIcon.style.opacity = 1;
             }
        }
    }
    }
    static get observedAttributes(){
        return ['src'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        let dgMenuIcon = this.dgMenuIcon;
      
    
            switch(name){
        case "src":
            try {
                 dgMenuIcon.querySelector("img").src = newValue;
            } catch (error) {}
        break;
      }
        
      
    }
    
    });


    /* ITEM TITLE */

    window.customElements.define("dg-toolbar-menu-item-title",class dgItemTitle extends dgToolbar {

        dgItemTitle = this;
        
        constructor(){
            super();
            let dgItemTitle = this;
        }
        
        connectedCallback(){
        let dgItemTitle = this;
    
        dgItemTitle.style.opacity = 0;
        dgItemTitle.style.display = "flex";
        dgItemTitle.style.marginLeft = "2.5px";
        dgItemTitle.style.marginRight = "2.5px";
        let dgToolbar = dgItemTitle.closest("dg-toolbar");

        dgItemTitle.style.display = (dgItemTitle.getAttribute("show")=="false"?"none":"flex");
    
    setTimeout(() => {
                setTimeout(() => {
                    dgItemTitle.style.opacity = 1;
                });
     });
       
        
        }
    
    });
    

   

window.customElements.define("dg-toolbar",dgToolbar);
window.customElements.define("dg-toolbar-menu",dgMenu);







