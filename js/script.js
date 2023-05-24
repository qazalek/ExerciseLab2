const size = 10;
const all = document.getElementById('total');
const list = document.getElementById('userslist');
all.innerHTML += users.length;


function pageCalculation()
 {
  const pageNumber = Math.ceil(users.length / size);
  const linkP = document.getElementById('pagination');
  for (i = 1; i <= pageNumber; i++) 
  {
    linkP.innerHTML += `<li><a class="links" onclick="pagedatarelevation(${i},this)">${i}</a></li>`
  }
}

function getdata(pagedata = [])
 {
  list.innerHTML = '';

  for (i = 0; i < pagedata.length; i++)
   {
    list.innerHTML += `
    <li class="contact-item cf">
        <div class="contact-details">
            <img class="avatar" src=${pagedata[i].image}>
            <h3>${pagedata[i].name
      }
      </h3>
            <span class="email">${pagedata[i].name.replace(' ', '.')}@example.com</span>
        </div>
        <div class="joined-details">
               <span class="date">Joined ${pagedata[i].joined}</span>
       </div>
    </li>

  ` }
}

function pagedatarelevation(pageNumber, element) 
{

  let start = (pageNumber * size) - size;
  let end = pageNumber * size;
  const user = users.slice(start, end);
  getdata(user)
}

pageCalculation();

pagedatarelevation(1);







