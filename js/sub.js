function sub() {
  if (confirm("제출하시겠습니까? 수정을 원하시면 '취소'를 선택해주세요.") == true) {
    location.href = "submit.html";
  } else {
    return;
  }
}