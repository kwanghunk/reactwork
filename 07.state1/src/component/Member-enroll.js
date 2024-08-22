
// 이름, 생년월일, 주소, 자기소개

import { useState } from "react";

const Member_enroll = () => {
    const[input, setInput] = useState({
        name : "",
        date : "",
        location : "",
        mylife : ""
    });
    const onChange2 = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setInput({
            ...input,// 객체 or 배열을 가져올때는 '...'을 사용하여 객체를 풀어서 가져와야함
            [e.target.name] : e.target.value
        })
    }
    return (
        <>
            <h1>회원가입</h1>
            이름 : <input name="name" onChange={onChange2}/><br/><br/>
            생년월일 : <input type="date" name="birth"  onChange={onChange2}/><br/><br/>
            거주지 :
            <select name="location"  onChange={onChange2}>
                <option value="">선택</option>
                <option vlaue="seoul">서울</option>
                <option vlaue="incheon">인천</option>
                <option vlaue="busan">부산</option>
            </select><br/><br/>
            자기소개<br/>
            <textarea name="mylife"  onChange={onChange2}/><br/><br/>
        </>
    )
}
export default Member_enroll;