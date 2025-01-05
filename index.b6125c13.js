document.querySelectorAll("form .field input").forEach(function(e){var t=e.name,l=t.charAt(0).toUpperCase()+t.slice(1),r=document.createElement("label");r.classList.add("field-label"),r.setAttribute("for",e.id),r.textContent=l,e.setAttribute("placeholder",l),e.parentElement.insertBefore(r,e)});
//# sourceMappingURL=index.b6125c13.js.map
