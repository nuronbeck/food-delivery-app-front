<template>
  <div class="container">
    <div class="profile">
      <div class="profile__tabs">
        <h3 class="profile__name">Settings</h3>
        <a class="profile__tab" href="#">
          <img class="tab-img" src="@/assets/profile/user.svg">
          <div class="tab-content">
            <h2 class="tab-title">Account</h2>
            <p class="tab-text">Personal information</p>
          </div>
        </a>
        <a class="profile__tab" href="#">
          <img class="tab-img" src="@/assets/profile/location.svg">
          <div class="tab-content">
            <h2 class="tab-title">Address</h2>
            <p class="tab-text">Shippings addresses</p>
          </div>
        </a>
        <a class="profile__tab" href="#">
          <img class="tab-img" src="@/assets/profile/card.svg">
          <div class="tab-content">
            <h2 class="tab-title">Payment method</h2>
            <p class="tab-text">Connected credit cards</p>
          </div>
        </a>
        <a class="profile__tab" href="#">
          <img class="tab-img" src="@/assets/profile/security.svg">
          <div class="tab-content">
            <h2 class="tab-title">Security</h2>
            <p class="tab-text">Password, 2FA</p>
          </div>
        </a>
      </div>
      <div class="account">
        <h3 class="profile__name">Account</h3>
        <div class="account__info">
          <h2 class="account__info--title">Personal information</h2>
          <p class="account__info--text">Avatar</p>
          <div class="account__action">
            <img class="action-img" src="@/assets/profile/girl.svg">
            <BaseButton variant="primary-outline">Change</BaseButton>
            <BaseButton variant="outline-none">Change</BaseButton>
          </div>
          <div class="accout__input">
            <BaseInput label="First name" placeholder="Jane"></BaseInput>
            <BaseInput label="Last name" placeholder="Robertson"></BaseInput>
            <BaseInput label="Email" placeholder="jane.robertson@example.com"></BaseInput>
            <BaseInput label="Phone number" placeholder="(217) 555-0113"></BaseInput>
          </div>
          <div class="account__checkbox">
            <h3 class="account__info--title">Email notifications</h3>
            <form>
              <div class="checkboxs">
                <div class="checkbox">
                  <input type="checkbox" id="notice1" name="notice1" value="f1">
                  <label for="notice1">New deals</label>
                  <input type="checkbox" id="notice2" name="notice1" value="f2">
                  <label for="notice2">New restaurants</label>
                  <input type="checkbox" id="notice3" name="notice1" value="f3">
                  <label for="notice3">Order statuses</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="notice4" name="notice1" value="f4">
                  <label for="notice4">Password changes</label>
                  <input type="checkbox" id="notice5" name="notice1" value="f5">
                  <label for="notice5">Special offers</label>
                  <input type="checkbox" id="notice6" name="notice1" value="f6">
                  <label for="notice6">Newsletter</label>
                </div>
              </div>
            </form>
          </div>
          <div class="account__btns">
          
              <BaseButton class="dangerBtn" variant="danger-outline">Log out</BaseButton>
     
           <div>
            <BaseButton disabled="disabled" class="DiscardBtn">Discard changes</BaseButton>
            <BaseButton class="SaveBtn">Save changes</BaseButton>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage"
}
</script>


<style>
.profile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}


.profile__name {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.1px;
  margin-bottom: 16px;
  color: #2B2B43;
}


.profile__tab {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 16px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 2px solid #EDEEF2;
  border-radius: 16px;
}

.profile__tab:hover {
  box-sizing: border-box;
  background: #F3F4FF;
  border: 2px solid #4E60FF;
  border-radius: 16px;
}

.tab-img {
  background: #EDEEF2;
  border-radius: 12px;
  padding: 10px;
  margin-right: 12px;
}


.tab-title {
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #2B2B43;
}

.tab-text {
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #545563;
}

.account__info {
  background: #FFFFFF;
  border: 1px solid #EDEEF2;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
}

.account__info--title {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  margin-bottom: 16px;
  color: #2B2B43;
}

.account__info--text {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
  color: #545563;
}

.account__action {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.action-img {
  cursor: pointer;
  border-radius: 12px;
  margin-right: 24px;
}

.accout__input {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.checkboxs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
  border-bottom: 1px solid var(--grey-lightest);
}

.checkbox {
  display: flex;
  flex-direction: column;
}

input[type=checkbox] {
  display: none;
}

input[type=checkbox]+label {
  font-family: 'Nunito', sans-serif;
  margin-bottom: 24px;
  min-width: 341px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #2B2B43;
}

input[type=checkbox]+label:before {
  content: "\2714";
  border: 1px solid var(--grey);
  border-radius: 4px;
  display: inline-block;
  width: 20px;
  height: 20px;
  padding-left: 2px;
  margin-right: 12px;
  color: transparent;
  transition: .2s;
}

input[type=checkbox]+label:active:before {
  transform: scale(0);
}

input[type=checkbox]:checked+label:before {
  background: var(--primary);
  color: var(--white);
}
.account__btns{
  display: flex;
  justify-content: space-between;
}

.DiscardBtn{
  margin-right: 16px;
}

/* Here you can define styles how to change on mobile  */
@media screen and (max-width: 768px) {
  .profile{
    grid-template-columns: 1fr;
  }
  .accout__input{
    grid-template-columns: 1fr;
  }
  .checkboxs{
    grid-template-columns: 1fr;
  }
  .account__btns{
    flex-direction: column;
}
.account__btns div:nth-child(2){
  display: flex;
  justify-content: space-between;
}
.dangerBtn{
  margin-bottom: 40px;
}
}
</style>