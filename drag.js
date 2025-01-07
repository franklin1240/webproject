let lists = document.getElementsByClassName('list')
let right = document.getElementById('right-list')
let left = document.getElementById('left-list')

for(list of lists){
       list.addEventListener('dragstart' , function(e){
          let selected =e.target

          left.addEventListener('dragover' , function(e){
             e.preventDefault()
          })
          
          left.addEventListener('drop' , function(e){
            left.appendChild(selected)
            selected = null
         })

         right.addEventListener('dragover' , function(e){
            e.preventDefault()
         })
         
         right.addEventListener('drop' , function(e){
           right.appendChild(selected)
           selected = null
        })
       })

}
