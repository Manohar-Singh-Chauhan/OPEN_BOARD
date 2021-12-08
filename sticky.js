let sticky = document.querySelector("#sticky");
sticky.addEventListener("click", function (e) {
    let sticky = document.createElement("div");
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML = `<div class="navbar">
<div class="close"></div>
<div class="minimize"></div>
</div>
<textarea name="" class="textarea"></textarea>`;
    body.appendChild(sticky);
    let minimize = sticky.querySelector(".minimize");
    let close = sticky.querySelector(".close");
    let textArea = sticky.querySelector("textarea");
    let isClosed = false;
    minimize.addEventListener("click", function (e) {
        if (isClosed == false) {
            textArea.style.display = "none";
        } else {
            textArea.style.display = "block";
        }
        isClosed = !isClosed
    })
    close.addEventListener("click", function () {
        sticky.remove();
    })
    
    sticky.onmousedown = function(event){
        dragAndDrop(sticky,event);
    }
    
})


//drag and drop function
function   dragAndDrop(element, event){
    element.onmousedown = function(event) {

        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;
      
        element.style.position = 'absolute';
        element.style.zIndex = 1000;
    
      
        moveAt(event.pageX, event.pageY);
      
        // moves the ball at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
            element.style.top = pageY - shiftY + 'px';
            element.style.left = pageX - shiftX + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // drop the ball, remove unneeded handlers
        element.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          element.onmouseup = null;
        };
      
      };
      
      
      element.ondragstart = function() {
        return false;
      };
  


}