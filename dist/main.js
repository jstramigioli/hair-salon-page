(()=>{"use strict";const e=()=>{const e=document.querySelector("#side-bar"),t=e.offsetHeight,n=t/12,c=n/5,a=3*Math.floor((c+t)/(n+c));document.documentElement.style.setProperty("--gap",`${c}px`),document.documentElement.style.setProperty("--square-size",`${n}px`),e.innerHTML="";for(let t=0;t<a;t++){const t=document.createElement("div");t.classList.add("square"),Math.random()<.05?t.classList.add("white-square"):Math.random()<.1&&t.classList.add("black-square"),e.appendChild(t)}},t=[],n=(e,t,n)=>({name:e,description:t,price:n});t.push(n("ropa1","Descripcion de ropa",3e3)),t.push(n("ropa2","Descripcion de ropa",4e3)),t.push(n("ropa3","Descripcion de ropa",3e3)),t.push(n("ropa4","Descripcion de ropa",2e3)),t.push(n("ropa5","Descripcion de ropa",3e3)),t.push(n("ropa6","Descripcion de ropa",7e3));const c=document.createElement("div");function a(e){const t=document.createElement("div");t.classList.add("article"),t.dataset.artName=e.name;const n=document.createElement("img");return n.classList.add("article-img"),n.src=`../src/img/${e.name}.jpg`,n.alt=e.name,t.appendChild(n),t.addEventListener("click",d),t}function d(e){"DIV"===e.currentTarget.tagName&&function(e){const t=document.querySelector("#content"),n=document.createElement("div");n.id="selected-article-container";const c=document.createElement("h2");c.classList.add("art-name"),c.textContent=e.name.toUpperCase();const a=document.createElement("img");a.classList.add("selected-article-img"),a.src=`../src/img/${e.name}.jpg`,a.alt=e.name;const d=document.createElement("p");d.classList.add("art-description"),d.textContent=e.description;const o=document.createElement("div");o.classList.add("img-and-description"),o.appendChild(a),o.appendChild(d);const i=document.createElement("h3");i.classList.add("price"),i.textContent=`$${e.price}`;const s=document.createElement("button");s.classList.add("buy-btn"),s.textContent="COMPRAR";const r=document.createElement("div");r.classList.add("buy-container"),r.appendChild(i),r.appendChild(s),n.appendChild(c),n.appendChild(o),n.appendChild(r),t.replaceChild(n,t.children[1])}(t.filter((t=>t.name==e.currentTarget.dataset.artName))[0])}c.id="catalog-browser",function(){const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.id="text-content";const n=document.createElement("header"),c=document.createElement("button");c.id="inicio-btn",c.className="menu-btn",c.textContent="INICIO";const a=document.createElement("button");a.id="contacto-btn",a.className="menu-btn",a.textContent="CONTACTO",n.appendChild(c),n.appendChild(a);const d=document.createElement("button");d.id="catalogo-btn",d.className="menu-btn",d.textContent="CATALOGO";const o=document.createElement("div");o.id="main-content";const i=document.createElement("h1");i.id="title",i.textContent="Germán y Bibiana Coiffeur";const s=document.createElement("div");s.className="decoration",s.id="dec-1";const r=document.createElement("div");r.className="square";const l=document.createElement("div");l.className="square",s.appendChild(r),s.appendChild(l);const m=document.createElement("p");m.textContent="Te ofrecemos un catálogo de prendas con diseños exclusivos confeccionadas a mano. Tu compra significa el apoyo a un negocio familiar que promueve el diseño de indumentaria artesanal necochense.";const p=document.createElement("div");p.className="decoration",p.id="dec-2";const u=document.createElement("div");u.className="square";const h=document.createElement("div");h.className="square",p.appendChild(u),p.appendChild(h);const C=document.createElement("div");C.id="side-bar";const E=document.createElement("div");E.id="img-content";const g=document.createElement("img");g.id="home-img",g.src="../src/img/ropa1.jpg",g.alt="Ropa confeccionada a mano",t.dataset.currentPage="home",t.appendChild(n),t.appendChild(d),o.appendChild(i),o.appendChild(s),o.appendChild(m),o.appendChild(p),t.appendChild(o),t.appendChild(C),E.appendChild(g),e.appendChild(t),e.appendChild(E),document.body.appendChild(e)}(),e(),window.addEventListener("resize",e),document.querySelector("#catalogo-btn").addEventListener("click",(()=>{!function(e){if(0==c.children.length)for(let t=0;t<e.length;t++)c.appendChild(a(e[t]));const t=document.querySelector("#text-content");t.dataset.currentPage="catalog",t.replaceChild(c,t.children[2])}(t)})),document.querySelector("#inicio-btn").addEventListener("click",(function(){const e=document.querySelector("#text-content");let t;if(null==document.querySelector("#main-content")?(t=document.createElement("div"),t.id="main-content",e.replaceChild(t,e.children[2])):t=document.querySelector("#main-content"),"home"!=e.dataset.currentPage){e.dataset.currentPage="home";const n=document.createElement("h1");n.id="title",n.textContent="Germán y Bibiana Coiffeur";const c=document.createElement("div");c.className="decoration",c.id="dec-1";const a=document.createElement("div");a.className="square";const d=document.createElement("div");d.className="square",c.appendChild(a),c.appendChild(d);const o=document.createElement("p");o.textContent="Te ofrecemos un catálogo de prendas con diseños exclusivos confeccionadas a mano. Tu compra significa el apoyo a un negocio familiar que promueve el diseño de indumentaria artesanal necochense.";const i=document.createElement("div");i.className="decoration",i.id="dec-2";const s=document.createElement("div");s.className="square";const r=document.createElement("div");r.className="square",i.appendChild(s),i.appendChild(r),t.appendChild(n),t.appendChild(c),t.appendChild(o),t.appendChild(i);const l=document.createElement("img");l.id="home-img",l.src="../src/img/ropa1.jpg",l.alt="Ropa confeccionada a mano";const m=document.createElement("div");m.id="img-content",m.appendChild(l),e.parentElement.replaceChild(m,e.nextElementSibling)}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVE1QyxZQUFZOEMsR0FFcEIsTUFBTUMsRUFBSWxFLFNBQVNlLGNBQWMsS0FDakNtRCxFQUFFeEIsWUFBYyxvTUFFaEIsTUFBTXlCLEVBQVVuRSxTQUFTZSxjQUFjLE9BQ3ZDb0QsRUFBUVQsVUFBWSxhQUNwQlMsRUFBUTFCLEdBQUssUUFDYixNQUFNMkIsRUFBVXBFLFNBQVNlLGNBQWMsT0FDdkNxRCxFQUFRVixVQUFZLFNBQ3BCLE1BQU1XLEVBQVVyRSxTQUFTZSxjQUFjLE9BQ3ZDc0QsRUFBUVgsVUFBWSxTQUNwQlMsRUFBUWhELFlBQVlpRCxHQUNwQkQsRUFBUWhELFlBQVlrRCxHQUVwQlIsRUFBZTFDLFlBQVkyQyxHQUMzQkQsRUFBZTFDLFlBQVk0QyxHQUMzQkYsRUFBZTFDLFlBQVkrQyxHQUMzQkwsRUFBZTFDLFlBQVlnRCxHQUczQixNQUFNSyxFQUFVeEUsU0FBU2UsY0FBYyxPQUN2Q3lELEVBQVEvQixHQUFLLFdBQ2IrQixFQUFReEMsSUFBTSx1QkFDZHdDLEVBQVF2QyxJQUFNLDRCQUVkLE1BQU1zQyxFQUFnQnZFLFNBQVNlLGNBQWMsT0FDN0N3RCxFQUFjOUIsR0FBSyxjQUNuQjhCLEVBQWNwRCxZQUFZcUQsR0FDMUI5QixFQUFZc0MsY0FBYzlCLGFBQWFxQixFQUFlN0IsRUFBWXVDLG1CQUNsRSxDQUNBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWlyLXNhbG9uLXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL2hhaXItc2Fsb24tcGFnZS8uL3NyYy9zcXVhcmVzLWJhci5qcyIsIndlYnBhY2s6Ly9oYWlyLXNhbG9uLXBhZ2UvLi9zcmMvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9oYWlyLXNhbG9uLXBhZ2UvLi9zcmMvbG9hZC1jYXRhbG9nLmpzIiwid2VicGFjazovL2hhaXItc2Fsb24tcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oYWlyLXNhbG9uLXBhZ2UvLi9zcmMvbG9hZC1pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGxvYWRQYWdlID0gZnVuY3Rpb24gKClcbnsvLyBDcmVhciBlbCBlbGVtZW50byBkaXYgY29uIGVsIGlkIFwiY29udGVudFwiXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50RGl2LmlkID0gJ2NvbnRlbnQnO1xuXG4vLyBDcmVhciBlbCBlbGVtZW50byBkaXYgY29uIGVsIGlkIFwidGV4dC1jb250ZW50XCJcbmNvbnN0IHRleHRDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50ZXh0Q29udGVudERpdi5pZCA9ICd0ZXh0LWNvbnRlbnQnO1xuXG4vLyBDcmVhciBlbCBlbGVtZW50byBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4vLyBDcmVhciBsb3MgYm90b25lcyBkZW50cm8gZGVsIGhlYWRlclxuY29uc3QgaW5pY2lvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5pbmljaW9CdG4uaWQgPSAnaW5pY2lvLWJ0bic7XG5pbmljaW9CdG4uY2xhc3NOYW1lID0gJ21lbnUtYnRuJztcbmluaWNpb0J0bi50ZXh0Q29udGVudCA9ICdJTklDSU8nO1xuXG5jb25zdCBjb250YWN0b0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29udGFjdG9CdG4uaWQgPSAnY29udGFjdG8tYnRuJztcbmNvbnRhY3RvQnRuLmNsYXNzTmFtZSA9ICdtZW51LWJ0bic7XG5jb250YWN0b0J0bi50ZXh0Q29udGVudCA9ICdDT05UQUNUTyc7XG5cbi8vIEFncmVnYXIgbG9zIGJvdG9uZXMgYWwgaGVhZGVyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaW5pY2lvQnRuKTtcbmhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0b0J0bik7XG5cbi8vIENyZWFyIGVsIGJvdMOzbiBcIkNBVEFMT0dPXCJcbmNvbnN0IGNhdGFsb2dvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jYXRhbG9nb0J0bi5pZCA9ICdjYXRhbG9nby1idG4nO1xuY2F0YWxvZ29CdG4uY2xhc3NOYW1lID0gJ21lbnUtYnRuJztcbmNhdGFsb2dvQnRuLnRleHRDb250ZW50ID0gJ0NBVEFMT0dPJztcblxuLy8gQ3JlYXIgZWwgZGl2IGNvbiBlbCBpZCBcIm1haW4tY29udGVudFwiXG5jb25zdCBtYWluQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRlbnREaXYuaWQgPSAnbWFpbi1jb250ZW50JztcblxuLy8gQ3JlYXIgZWwgdMOtdHVsbyBoMVxuY29uc3QgdGl0bGVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG50aXRsZUgxLmlkID0gJ3RpdGxlJztcbnRpdGxlSDEudGV4dENvbnRlbnQgPSAnR2VybcOhbiB5IEJpYmlhbmEgQ29pZmZldXInO1xuXG4vLyBDcmVhciBsYXMgZGVjb3JhY2lvbmVzIGNvbiBsYXMgY2xhc2VzIFwiZGVjb3JhdGlvblwiIHkgXCJzcXVhcmVcIlxuY29uc3QgZGVjMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVjMURpdi5jbGFzc05hbWUgPSAnZGVjb3JhdGlvbic7XG5kZWMxRGl2LmlkID0gJ2RlYy0xJztcbmNvbnN0IHNxdWFyZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNxdWFyZTEuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG5jb25zdCBzcXVhcmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zcXVhcmUyLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuZGVjMURpdi5hcHBlbmRDaGlsZChzcXVhcmUxKTtcbmRlYzFEaXYuYXBwZW5kQ2hpbGQoc3F1YXJlMik7XG5cbmNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5wLnRleHRDb250ZW50ID0gJ1RlIG9mcmVjZW1vcyB1biBjYXTDoWxvZ28gZGUgcHJlbmRhcyBjb24gZGlzZcOxb3MgZXhjbHVzaXZvcyBjb25mZWNjaW9uYWRhcyBhIG1hbm8uIFR1IGNvbXByYSBzaWduaWZpY2EgZWwgYXBveW8gYSB1biBuZWdvY2lvIGZhbWlsaWFyIHF1ZSBwcm9tdWV2ZSBlbCBkaXNlw7FvIGRlIGluZHVtZW50YXJpYSBhcnRlc2FuYWwgbmVjb2NoZW5zZS4nO1xuXG5jb25zdCBkZWMyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kZWMyRGl2LmNsYXNzTmFtZSA9ICdkZWNvcmF0aW9uJztcbmRlYzJEaXYuaWQgPSAnZGVjLTInO1xuY29uc3Qgc3F1YXJlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3F1YXJlMy5jbGFzc05hbWUgPSAnc3F1YXJlJztcbmNvbnN0IHNxdWFyZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNxdWFyZTQuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG5kZWMyRGl2LmFwcGVuZENoaWxkKHNxdWFyZTMpO1xuZGVjMkRpdi5hcHBlbmRDaGlsZChzcXVhcmU0KTtcblxuLy8gQ3JlYXIgZWwgZGl2IGNvbiBlbCBpZCBcInNpZGUtYmFyXCJcbmNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNpZGVCYXJEaXYuaWQgPSAnc2lkZS1iYXInO1xuXG4vLyBDcmVhciBlbCBkaXYgY29uIGVsIGlkIFwiaW1nLWNvbnRlbnRcIlxuY29uc3QgaW1nQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW1nQ29udGVudERpdi5pZCA9ICdpbWctY29udGVudCc7XG5cbi8vIENyZWFyIGxhIGltYWdlblxuY29uc3QgaG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaG9tZUltZy5pZCA9ICdob21lLWltZyc7XG5ob21lSW1nLnNyYyA9ICcuLi9zcmMvaW1nL3JvcGExLmpwZyc7XG5ob21lSW1nLmFsdCA9ICdSb3BhIGNvbmZlY2Npb25hZGEgYSBtYW5vJztcblxudGV4dENvbnRlbnREaXYuZGF0YXNldC5jdXJyZW50UGFnZSA9ICdob21lJ1xuXG4vLyBBZ3JlZ2FyIGVsZW1lbnRvcyBhIGxhIGVzdHJ1Y3R1cmFcbnRleHRDb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG50ZXh0Q29udGVudERpdi5hcHBlbmRDaGlsZChjYXRhbG9nb0J0bik7XG5tYWluQ29udGVudERpdi5hcHBlbmRDaGlsZCh0aXRsZUgxKTtcbm1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGRlYzFEaXYpO1xubWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocCk7XG5tYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChkZWMyRGl2KTtcbnRleHRDb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50RGl2KTtcbnRleHRDb250ZW50RGl2LmFwcGVuZENoaWxkKHNpZGVCYXJEaXYpXG5cbmltZ0NvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZUltZyk7XG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnREaXYpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChpbWdDb250ZW50RGl2KTtcblxuLy8gQWdyZWdhciBsYSBlc3RydWN0dXJhIGNvbXBsZXRhIGFsIGRvY3VtZW50b1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuXG59XG5cbmV4cG9ydCB7IGxvYWRQYWdlIH0iLCJjb25zdCB1cGRhdGVTcXVhcmVzID0gKCkgPT4ge1xuY29uc3QgYmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtYmFyJylcblxuY29uc3QgaGVpZ2h0ID0gYmFyQ29udGFpbmVyLm9mZnNldEhlaWdodFxuXG5cbmNvbnN0IHNxdWFyZUxlbmd0aCA9IGhlaWdodCAvIDEyXG5jb25zdCBnYXAgPSBzcXVhcmVMZW5ndGggLyA1XG5cbmNvbnN0IGNvbE51bSA9IDNcbmNvbnN0IHJvd051bSA9IE1hdGguZmxvb3IoKGdhcCArIGhlaWdodCkgLyAoc3F1YXJlTGVuZ3RoICsgZ2FwKSkgXG5jb25zdCBzcXVhcmVOdW0gPSBjb2xOdW0qcm93TnVtXG5cbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1nYXAnLCBgJHtnYXB9cHhgKTtcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zcXVhcmUtc2l6ZScsIGAke3NxdWFyZUxlbmd0aH1weGApO1xuXG5iYXJDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNxdWFyZU51bSA7IGkrKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJylcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjA1KSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnd2hpdGUtc3F1YXJlJyk7XG4gICAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4xKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYmxhY2stc3F1YXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpXG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBhZGRTcXVhcmVzID0gKCkgPT4ge1xuICAgIHVwZGF0ZVNxdWFyZXMoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTcXVhcmVzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRTcXVhcmVzIiwiY29uc3QgY2F0YWxvZyA9IFtdXG5cbmNvbnN0IGFydGljbGUgPSAobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2V9XG59XG5cbmNhdGFsb2cucHVzaChhcnRpY2xlKCdyb3BhMScsICdEZXNjcmlwY2lvbiBkZSByb3BhJywgMzAwMCkpXG5jYXRhbG9nLnB1c2goYXJ0aWNsZSgncm9wYTInLCAnRGVzY3JpcGNpb24gZGUgcm9wYScsIDQwMDApKVxuY2F0YWxvZy5wdXNoKGFydGljbGUoJ3JvcGEzJywgJ0Rlc2NyaXBjaW9uIGRlIHJvcGEnLCAzMDAwKSlcbmNhdGFsb2cucHVzaChhcnRpY2xlKCdyb3BhNCcsICdEZXNjcmlwY2lvbiBkZSByb3BhJywgMjAwMCkpXG5jYXRhbG9nLnB1c2goYXJ0aWNsZSgncm9wYTUnLCAnRGVzY3JpcGNpb24gZGUgcm9wYScsIDMwMDApKVxuY2F0YWxvZy5wdXNoKGFydGljbGUoJ3JvcGE2JywgJ0Rlc2NyaXBjaW9uIGRlIHJvcGEnLCA3MDAwKSlcblxuZXhwb3J0IHsgY2F0YWxvZyB9IiwiY29uc3QgY2F0YWxvZ0Jyb3dzZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY2F0YWxvZ0Jyb3dzZXJEaXYuaWQgPSAnY2F0YWxvZy1icm93c2VyJ1xuXG5pbXBvcnQgeyBjYXRhbG9nIH0gZnJvbSAnLi9jYXRhbG9nLmpzJ1xuXG5cbmZ1bmN0aW9uIGFkZEFydGljbGVUb0Jyb3dzZXIoYXJ0aWNsZSkge1xuICAgIGNvbnN0IGFydGljbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFydGljbGVEaXYuY2xhc3NMaXN0LmFkZCgnYXJ0aWNsZScpXG4gICAgYXJ0aWNsZURpdi5kYXRhc2V0LmFydE5hbWUgPSBhcnRpY2xlLm5hbWU7XG5cbiAgICBjb25zdCBhcnRpY2xlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBhcnRpY2xlSW1nLmNsYXNzTGlzdC5hZGQoJ2FydGljbGUtaW1nJyk7XG4gICAgYXJ0aWNsZUltZy5zcmMgPSBgLi4vc3JjL2ltZy8ke2FydGljbGUubmFtZX0uanBnYDtcbiAgICBhcnRpY2xlSW1nLmFsdCA9IGFydGljbGUubmFtZTtcblxuICAgIGFydGljbGVEaXYuYXBwZW5kQ2hpbGQoYXJ0aWNsZUltZyk7XG5cbiAgICBhcnRpY2xlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkdEFydGljbGVIYW5kbGVyKVxuXG4gICAgcmV0dXJuIGFydGljbGVEaXZcbn1cblxuZnVuY3Rpb24gdXBkYXRlQnJvd3NlcihhcnRpY2xlTGlzdCkge1xuICAgIGlmIChjYXRhbG9nQnJvd3NlckRpdi5jaGlsZHJlbi5sZW5ndGggPT0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZUxpc3QubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIGNhdGFsb2dCcm93c2VyRGl2LmFwcGVuZENoaWxkKGFkZEFydGljbGVUb0Jyb3dzZXIoYXJ0aWNsZUxpc3RbaV0pKVxuICAgIH19XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1jb250ZW50JylcbiAgICB0ZXh0Q29udGVudC5kYXRhc2V0LmN1cnJlbnRQYWdlID0gJ2NhdGFsb2cnXG4gICAgdGV4dENvbnRlbnQucmVwbGFjZUNoaWxkKGNhdGFsb2dCcm93c2VyRGl2LCB0ZXh0Q29udGVudC5jaGlsZHJlblsyXSlcbn1cblxuZnVuY3Rpb24gdXBkdEFydGljbGVIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFnTmFtZSA9PT0gJ0RJVicpIHtcbiAgICB1cGRhdGVTZWxlY3RlZEFydGljbGUoY2F0YWxvZy5maWx0ZXIoKGFydGljbGUpID0+IGFydGljbGUubmFtZSA9PSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYXJ0TmFtZSlbMF0pXG59XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGVkQXJ0aWNsZShhcnRpY2xlKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBjb25zdCBzZWxlY3RlZEFydGljbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNlbGVjdGVkQXJ0aWNsZUNvbnRhaW5lci5pZCA9ICdzZWxlY3RlZC1hcnRpY2xlLWNvbnRhaW5lcidcblxuICAgIGNvbnN0IGFydE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgYXJ0TmFtZS5jbGFzc0xpc3QuYWRkKCdhcnQtbmFtZScpXG4gICAgYXJ0TmFtZS50ZXh0Q29udGVudCA9IGFydGljbGUubmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgY29uc3QgYXJ0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBhcnRJbWcuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtYXJ0aWNsZS1pbWcnKVxuICAgIGFydEltZy5zcmMgPSBgLi4vc3JjL2ltZy8ke2FydGljbGUubmFtZX0uanBnYDtcbiAgICBhcnRJbWcuYWx0ID0gYXJ0aWNsZS5uYW1lXG4gICAgXG4gICAgY29uc3QgYXJ0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhcnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdhcnQtZGVzY3JpcHRpb24nKVxuICAgIGFydERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYXJ0aWNsZS5kZXNjcmlwdGlvblxuXG4gICAgY29uc3QgYXJ0SW1nQW5kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFydEltZ0FuZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2ltZy1hbmQtZGVzY3JpcHRpb24nKVxuICAgIGFydEltZ0FuZERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGFydEltZylcbiAgICBhcnRJbWdBbmREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChhcnREZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IGFydFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGFydFByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJylcbiAgICBhcnRQcmljZS50ZXh0Q29udGVudCA9IGAkJHthcnRpY2xlLnByaWNlfWBcblxuICAgIGNvbnN0IGJ1eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV5QnRuLmNsYXNzTGlzdC5hZGQoJ2J1eS1idG4nKVxuICAgIGJ1eUJ0bi50ZXh0Q29udGVudCA9ICdDT01QUkFSJ1xuXG4gICAgY29uc3QgYnV5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV5LWNvbnRhaW5lcicpXG4gICAgYnV5Q29udGFpbmVyLmFwcGVuZENoaWxkKGFydFByaWNlKVxuICAgIGJ1eUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXlCdG4pXG5cbiAgICBzZWxlY3RlZEFydGljbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0TmFtZSk7XG4gICAgc2VsZWN0ZWRBcnRpY2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydEltZ0FuZERlc2NyaXB0aW9uKVxuICAgIHNlbGVjdGVkQXJ0aWNsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXlDb250YWluZXIpXG5cbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZChzZWxlY3RlZEFydGljbGVDb250YWluZXIsIGNvbnRlbnQuY2hpbGRyZW5bMV0pXG59XG5cbmNvbnN0IHVwZGF0ZUJyb3dzZXJFeHBvcnRlciA9ICgpID0+IHt1cGRhdGVCcm93c2VyKGNhdGFsb2cpfVxuXG5leHBvcnQgeyB1cGRhdGVCcm93c2VyRXhwb3J0ZXIgYXMgdXBkYXRlQnJvd3NlciB9IiwiaW1wb3J0IHsgbG9hZFBhZ2V9IGZyb20gJy4vbG9hZC1wYWdlLmpzJ1xuXG5sb2FkUGFnZSgpXG5cbmltcG9ydCBhZGRTcXVhcmVzIGZyb20gJy4vc3F1YXJlcy1iYXIuanMnXG5cbmFkZFNxdWFyZXMoKVxuXG4vKmltcG9ydCBjbGVhck1haW5Db250ZW50IGZyb20gJy4vY2xlYXItY29udGVudC5qcycqL1xuXG5cblxuXG5pbXBvcnQgeyB1cGRhdGVCcm93c2VyIH0gZnJvbSAnLi9sb2FkLWNhdGFsb2cuanMnXG5cblxuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tICcuL2xvYWQtaW5kZXguanMnXG5cblxuY29uc3QgY2F0YWxvZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRhbG9nby1idG4nKVxuY2F0YWxvZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUJyb3dzZXIpXG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5pY2lvLWJ0bicpXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEhvbWUpIiwiZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1jb250ZW50JylcbiAgICBsZXQgbWFpbkNvbnRlbnREaXZcblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRlbnQnKSA9PSBudWxsICkge1xuICAgIG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnREaXYuaWQgPSAnbWFpbi1jb250ZW50JztcblxuICAgIFxuICAgIHRleHRDb250ZW50LnJlcGxhY2VDaGlsZChtYWluQ29udGVudERpdiAsIHRleHRDb250ZW50LmNoaWxkcmVuWzJdKVxufVxuZWxzZSB7bWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50Jyl9XG5cbmlmICh0ZXh0Q29udGVudC5kYXRhc2V0LmN1cnJlbnRQYWdlICE9ICdob21lJykge1xuXG4gICAgdGV4dENvbnRlbnQuZGF0YXNldC5jdXJyZW50UGFnZSA9ICdob21lJ1xuXG4vLyBDcmVhciBlbCB0w610dWxvIGgxXG5jb25zdCB0aXRsZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbnRpdGxlSDEuaWQgPSAndGl0bGUnO1xudGl0bGVIMS50ZXh0Q29udGVudCA9ICdHZXJtw6FuIHkgQmliaWFuYSBDb2lmZmV1cic7XG5cbi8vIENyZWFyIGxhcyBkZWNvcmFjaW9uZXMgY29uIGxhcyBjbGFzZXMgXCJkZWNvcmF0aW9uXCIgeSBcInNxdWFyZVwiXG5jb25zdCBkZWMxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kZWMxRGl2LmNsYXNzTmFtZSA9ICdkZWNvcmF0aW9uJztcbmRlYzFEaXYuaWQgPSAnZGVjLTEnO1xuY29uc3Qgc3F1YXJlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3F1YXJlMS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbmNvbnN0IHNxdWFyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNxdWFyZTIuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG5kZWMxRGl2LmFwcGVuZENoaWxkKHNxdWFyZTEpO1xuZGVjMURpdi5hcHBlbmRDaGlsZChzcXVhcmUyKTtcblxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnAudGV4dENvbnRlbnQgPSAnVGUgb2ZyZWNlbW9zIHVuIGNhdMOhbG9nbyBkZSBwcmVuZGFzIGNvbiBkaXNlw7FvcyBleGNsdXNpdm9zIGNvbmZlY2Npb25hZGFzIGEgbWFuby4gVHUgY29tcHJhIHNpZ25pZmljYSBlbCBhcG95byBhIHVuIG5lZ29jaW8gZmFtaWxpYXIgcXVlIHByb211ZXZlIGVsIGRpc2XDsW8gZGUgaW5kdW1lbnRhcmlhIGFydGVzYW5hbCBuZWNvY2hlbnNlLic7XG5cbmNvbnN0IGRlYzJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRlYzJEaXYuY2xhc3NOYW1lID0gJ2RlY29yYXRpb24nO1xuZGVjMkRpdi5pZCA9ICdkZWMtMic7XG5jb25zdCBzcXVhcmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zcXVhcmUzLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuY29uc3Qgc3F1YXJlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3F1YXJlNC5jbGFzc05hbWUgPSAnc3F1YXJlJztcbmRlYzJEaXYuYXBwZW5kQ2hpbGQoc3F1YXJlMyk7XG5kZWMyRGl2LmFwcGVuZENoaWxkKHNxdWFyZTQpO1xuXG5tYWluQ29udGVudERpdi5hcHBlbmRDaGlsZCh0aXRsZUgxKTtcbm1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGRlYzFEaXYpO1xubWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocCk7XG5tYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChkZWMyRGl2KTtcblxuLy8gQ3JlYXIgbGEgaW1hZ2VuXG5jb25zdCBob21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5ob21lSW1nLmlkID0gJ2hvbWUtaW1nJztcbmhvbWVJbWcuc3JjID0gJy4uL3NyYy9pbWcvcm9wYTEuanBnJztcbmhvbWVJbWcuYWx0ID0gJ1JvcGEgY29uZmVjY2lvbmFkYSBhIG1hbm8nO1xuXG5jb25zdCBpbWdDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbWdDb250ZW50RGl2LmlkID0gJ2ltZy1jb250ZW50JztcbmltZ0NvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZUltZyk7XG50ZXh0Q29udGVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChpbWdDb250ZW50RGl2LCB0ZXh0Q29udGVudC5uZXh0RWxlbWVudFNpYmxpbmcpXG59XG59XG5cbmV4cG9ydCB7bG9hZEhvbWV9Il0sIm5hbWVzIjpbInVwZGF0ZVNxdWFyZXMiLCJiYXJDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzcXVhcmVMZW5ndGgiLCJnYXAiLCJzcXVhcmVOdW0iLCJNYXRoIiwiZmxvb3IiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiaW5uZXJIVE1MIiwiaSIsInNxdWFyZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyYW5kb20iLCJhcHBlbmRDaGlsZCIsImNhdGFsb2ciLCJhcnRpY2xlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwdXNoIiwiY2F0YWxvZ0Jyb3dzZXJEaXYiLCJhZGRBcnRpY2xlVG9Ccm93c2VyIiwiYXJ0aWNsZURpdiIsImRhdGFzZXQiLCJhcnROYW1lIiwiYXJ0aWNsZUltZyIsInNyYyIsImFsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGR0QXJ0aWNsZUhhbmRsZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ0YWdOYW1lIiwiY29udGVudCIsInNlbGVjdGVkQXJ0aWNsZUNvbnRhaW5lciIsImlkIiwidGV4dENvbnRlbnQiLCJ0b1VwcGVyQ2FzZSIsImFydEltZyIsImFydERlc2NyaXB0aW9uIiwiYXJ0SW1nQW5kRGVzY3JpcHRpb24iLCJhcnRQcmljZSIsImJ1eUJ0biIsImJ1eUNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImNoaWxkcmVuIiwidXBkYXRlU2VsZWN0ZWRBcnRpY2xlIiwiZmlsdGVyIiwiY29udGVudERpdiIsInRleHRDb250ZW50RGl2IiwiaGVhZGVyIiwiaW5pY2lvQnRuIiwiY2xhc3NOYW1lIiwiY29udGFjdG9CdG4iLCJjYXRhbG9nb0J0biIsIm1haW5Db250ZW50RGl2IiwidGl0bGVIMSIsImRlYzFEaXYiLCJzcXVhcmUxIiwic3F1YXJlMiIsInAiLCJkZWMyRGl2Iiwic3F1YXJlMyIsInNxdWFyZTQiLCJzaWRlQmFyRGl2IiwiaW1nQ29udGVudERpdiIsImhvbWVJbWciLCJjdXJyZW50UGFnZSIsImJvZHkiLCJsb2FkUGFnZSIsIndpbmRvdyIsImFydGljbGVMaXN0IiwibGVuZ3RoIiwidXBkYXRlQnJvd3NlciIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciXSwic291cmNlUm9vdCI6IiJ9