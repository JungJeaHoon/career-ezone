
/*1.기본정보 수정하기 클릭시*/

document.getElementById("toggleBtn").addEventListener("click", function() {
  var showBox = document.getElementById("showBox");
  var hideBox = document.getElementById("hideBox");

  if (showBox.classList.contains("show")) {
    showBox.classList.remove("show");
    showBox.classList.add("hide");
    hideBox.classList.remove("hide");
    hideBox.classList.add("show");
  } else {
    hideBox.classList.remove("show");
    hideBox.classList.add("hide");
    showBox.classList.remove("hide");
    showBox.classList.add("show");
  }
});







/*2.학교선택시 창보이기*/

//버튼지정
const elementaryBtn = document.querySelector('.school_elementary');
const middleBtn = document.querySelector('.school_middle');
const highBtn = document.querySelector('.school_high');
const collegeBtn = document.querySelector('.school_college');
//아이템지정
const alls = document.querySelectorAll('.ALL');
const elementaryWrap = document.querySelector('.elementary_form_Wrap');
const middle = document.querySelector('.middle_form_Wrap');
const high = document.querySelector('.high_form_Wrap');
const college = document.querySelector('.high_college_wrap');
// 모든 아이템 숨기기
const hideAllItems = () => {
  alls.forEach((item) => {
    item.style.display = 'none';
  })
}
// 모든 학교 버튼에 대한 스타일 초기화 함수
const resetButtonStyles = () => {
  elementaryBtn.style.backgroundColor = ''; 
  elementaryBtn.style.color = ''; 

  middleBtn.style.backgroundColor = ''; 
  middleBtn.style.color = ''; 

  highBtn.style.backgroundColor = ''; 
  highBtn.style.color = ''; 

  collegeBtn.style.backgroundColor = ''; 
  collegeBtn.style.color = ''; 
};

//학교 버튼클릭 이벤트 핸들러
elementaryBtn.addEventListener('click', () => {
  resetButtonStyles();
  hideAllItems();  
  elementaryBtn.style.backgroundColor = '#4876EF';
  elementaryBtn.style.color = '#fff';
  elementaryWrap.style.display = 'block';
});
middleBtn.addEventListener('click', () => {
  resetButtonStyles(); 
  hideAllItems();
  middleBtn.style.backgroundColor = '#4876EF';
  middleBtn.style.color = '#fff';
  middle.style.display = 'block';
});

highBtn.addEventListener('click', () => {
  resetButtonStyles(); 
  hideAllItems();
  highBtn.style.backgroundColor = '#4876EF';
  highBtn.style.color = '#fff';
  high.style.display = 'block';
});

collegeBtn.addEventListener('click', () => {
  resetButtonStyles(); 
  hideAllItems();
  collegeBtn.style.backgroundColor = '#4876EF';
  collegeBtn.style.color = '#fff';
  college.style.display = 'block';
});








/*3.신입 선택시 창보이기*/

const newWorkBtn = document.querySelector('.newWork');
const oldWorkBtn = document.querySelector('.oldWork');

const newWorkForm = document.querySelector('.Newcomer');
const oldWorkForm = document.querySelector('.experienced');

// 모든 폼 숨기기
const hideAllForms = () => {
  newWorkForm.style.display = 'none';
  oldWorkForm.style.display = 'none';
};


// 모든 버튼 색상 초기화 함수
const resetButtonColors = () => {
  newWorkBtn.style.backgroundColor = ''; 
  newWorkBtn.style.color = ''; 
  oldWorkBtn.style.backgroundColor = ''; 
  oldWorkBtn.style.color = ''; 
};

// 신입 버튼 클릭 이벤트 핸들러
newWorkBtn.addEventListener('click', () => {
  hideAllForms();
  newWorkForm.style.display = 'block';
  oldWorkForm.style.display = 'none';    
  resetButtonColors();
  newWorkBtn.style.backgroundColor = '#4876EF';
  newWorkBtn.style.color = '#fff';
});

// 경력 버튼 클릭 이벤트 핸들러
oldWorkBtn.addEventListener('click', () => {
  hideAllForms();
  oldWorkForm.style.display = 'block';
  newWorkForm.style.display = 'none';
  resetButtonColors();
  oldWorkBtn.style.backgroundColor = '#4876EF';
  oldWorkBtn.style.color = '#fff';
});




/*5.경력 기술서 */

//hideBasics-기본창이 안사라진다ㅠ
//모든 버튼이 한번씩만 작동하고 안 움직인다 ㅠ

const projectBtn = document.querySelector('.projectBtn');
const DevelopBtn = document.querySelector('.DevelopBtn');
const DesignBtn = document.querySelector('.DesignBtn');
const BusinessBtn = document.querySelector('.BusinessBtn');

const hideBasics = document.querySelector('.hideBasics');

const projectType = document.querySelector('.projectType');
const DevelopType = document.querySelector('.DevelopType');
const DesignType = document.querySelector('.DesignType');
const BusinessType = document.querySelector('.BusinessType');

let isProjectTypeVisible = false;
let isDevelopTypeVisible = false;
let isDesignTypeVisible = false;
let isBusinessTypeVisible = false;

const hideAll = () => {  
  projectType.style.display = 'none';
  DevelopType.style.display = 'none';
  DesignType.style.display = 'none';
  BusinessType.style.display = 'none';
}
const showType = (type) => {
  hideAll();
  hideBasics.style.display = 'none';
  type.style.display = 'block';
}
projectBtn.addEventListener('click', () => {
  if (!isProjectTypeVisible) {
    hideAll();
    isProjectTypeVisible = true;
    projectType.style.display = 'block';
  }
});
DevelopBtn.addEventListener('click', () => {
  if (!isDevelopTypeVisible) {
    hideAll();
    isDevelopTypeVisible = true;
    DevelopType.style.display = 'block';
  }
});
DesignBtn.addEventListener('click', () => {
  if (!isDesignTypeVisible) {
    hideAll();
    isDesignTypeVisible = true;
    DesignType.style.display = 'block';
  }
});
BusinessBtn.addEventListener('click', () => {
  if (!isBusinessTypeVisible) {
    hideAll();
    isBusinessTypeVisible = true;
    BusinessType.style.display = 'block';
  }
});







// 6.자기소개서 항목예시

//작동하고 난 후 -저장된 정보 불러오기가- 사라진다 
//작동후 반복 작동이 안되는 이유는 뭘까...

const IntroduceBtn = document.querySelector('.IntroduceBtn');
const IntroduceItem = document.querySelector('.Self_introduction_wrap');
const closeBtn = document.querySelector('.sec10_Title_Closed');

IntroduceBtn.addEventListener('click',()=>{
  IntroduceItem.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
  IntroduceBtn.remove();
  IntroduceItem.style.display = 'none';
});









// 800px이후의 gnb창 튀어나오게

const gnbBtn = document.querySelector('.gnbBtn');
const gnb_open = document.querySelector('.gnb_open');
const dark = document.querySelector('.dark');
const btn_subs= document.querySelectorAll('.btn_sub');
const btn_subArrows= document.querySelectorAll('.btn_sub>span');
const list_sub_wraps= document.querySelectorAll('.list_sub_wrap');

//gnb가 왼쪽에서 튀어나오게
gnbBtn.addEventListener('click',()=>{
    gnb_open.style = `transform: translateX(0)`;
    dark.style.display = 'block';
})

//gnb가 왼쪽으로 들어가게

dark.addEventListener('click',()=>{
    gnb_open.style = `transform: translateX(-100%)`;
    dark.style.display = 'none';
})

//gnb내부의 서브(여러개)
btn_subs.forEach(function(item,index){
    item.addEventListener('click',function(){
    btn_subArrows[index].classList.toggle('on');
    if(btn_subArrows[index].classList.contains('on')){
        list_sub_wraps[index].style.height = 'auto';
    }else {
        list_sub_wraps[index].style.height = '0';
    }
    })
})




// 스크롤 맨 위로 이동하는 함수
function scrollToTop() {
  window.scrollTo(0, 0);
}

// 버튼 클릭 이벤트 처리
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.addEventListener("click", function() {
    scrollToTop();
  });
});
console.log('scrollToTopBtn',scrollToTopBtn)









// section8 포트폴리오 및 기타문서 삭제하기

const removeIcon = document.querySelector('.trashIcon');

removeIcon.addEventListener('click',deleteSec8Wrap);

function deleteSec8Wrap(){
  const sec8_wrap = document.querySelector('.sec8_wrap');
  sec8_wrap.parentNode.removeChild(sec8_wrap);
}



// section8 포트폴리오 및 기타문서 추가

const plusIcon  = document.querySelector('.portfolioAdd');
const DocumentsWrap = document.querySelector('.DocumentsWrap');
const fileDeleteBtn =document.querySelector('.FileDeleteBtn ');

plusIcon.addEventListener('click',showDocumentsWrap);
fileDeleteBtn.addEventListener('click',hideDocumentsWrap);

function showDocumentsWrap(){
  DocumentsWrap.style.display = 'block';
}

function hideDocumentsWrap (){
  DocumentsWrap.style.display = 'none';
}


// section8 포트폴리오 및 기타문서 추가해서 완료 버튼 누르면 아이템 생기게
// 아이템의 css가 왜 이상하게 생기지???
//계속 추가는 안된다????
//삭제도 한번 밖에 안되는 이유는 뭘까..
  
  const completionBtn = document.querySelector(".CompletionBtn");  
  const portfolioContainer = document.getElementById("portfolioContainer");

  completionBtn.addEventListener("click", createNewPortfolioItem);

  function createNewPortfolioItem() {
    const newPortfolioItem = document.createElement("div");
    newPortfolioItem.classList.add("sec8_wrap");
    newPortfolioItem.innerHTML = `    
    <div class="ckeckWrap">
      <input type="checkbox" checked>포트폴리오                  
    </div>
    <div class="titleURLWrap">
      <a href="https://jungjeahoon.github.io/portfolio/" target="_blank" class="titleURL">https://jungjeahoon.github.io/portfolio/</a>
    </div>
    <div class="fileSizeWrap">
      <p class="fileSize">60KB</p>
    </div>
    <div class="fileDateWrap">
      <p class="fileDate">2023.07.17</p>
    </div>
    <div class="fileDeleteWrap">
      <p class="fileDate"><i class="fa-solid fa-trash-can trashIcon"></i></p>
    </div>  
    `;
    portfolioContainer.appendChild(newPortfolioItem);
    hideDocumentsWrap ()
  }











  // aside 추가버튼 클릭시 창 생기게
  //a태그 눌러야 삭제된다...span 태그 눌러 삭제해야 하는데..
  //a태그 배경색 빼면 작동이 안하는 이유는 몰까..


// 스팬 버튼 클릭 이벤트 처리
const spanButtons = document.querySelectorAll('.btn_checkSpan');

spanButtons.forEach((spanButton) => {
  spanButton.addEventListener('click', (event) => {
    const button = event.target;
    const contentId = button.parentElement.getAttribute('data-content');
    const content = document.getElementById(contentId);
    if (!content) {
      console.error('해당하는 디브가 없습니다.', contentId);
      return;
    }
    button.textContent = '제거 X ';
    const aLink = button.parentElement;
    aLink.style.backgroundColor = '#4876EF';
    aLink.style.color = 'white';

    content.style.display = 'block';

    console.log('스팬 버튼 클릭:', content.textContent);
  });
});

// 제거 버튼 클릭 이벤트 처리
const removeButtons = document.querySelectorAll('.link_changeA');

removeButtons.forEach((removeButton) => {
  removeButton.addEventListener('click', (event) => {
    const button = event.target;
    const contentId = button.getAttribute('data-content');
    const content = document.getElementById(contentId);
    if (!content) {
      console.error('해당하는 디브가 없습니다.', contentId);
      return;
    }
   // span의 텍스트를 '추가 +'로 변경합니다.
  const spanButton = button.querySelector('.btn_checkSpan');
  spanButton.textContent = '추가 +';
  // a의 칼라를 기본값으로 복원합니다.
  button.style.backgroundColor = '';
  button.style.color = '';

  // 해당하는 content를 숨깁니다.
  content.style.display = 'none';

  // 콘솔에 해당 내용 출력
  console.log('제거 버튼 클릭:', content.textContent);
});
});


