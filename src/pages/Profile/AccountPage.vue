<template>
  <div>
    <h3 class="profile__name">Account</h3>
    <div class="account__info">
      <h2 class="account__title">Personal information</h2>
      <p class="account__text">Avatar</p>
      <div class="account__action">
        <img class="account__img" src="@/assets/profile/girl.svg" />
        <BaseButton variant="primary-outline">Change</BaseButton>
        <BaseButton variant="none">Remove</BaseButton>
      </div>

      <div class="account__input">
        <BaseInput
          label="First name"
          placeholder="Jane"
          :value="formData.firstName"
          :error="errors.firstName"
          @onInput="(value) => changeField('firstName', value)"
        />

        <BaseInput
          label="Last name"
          placeholder="Robertson"
          :value="formData.lastName"
          :error="errors.lastName"
          @onInput="(value) => changeField('lastName', value)"
        />

        <BaseInput
          label="Email"
          placeholder="jane.robertson@example.com"
          :value="formData.email"
          :error="errors.email"
          @onInput="(value) => changeField('email', value)"
        />

        <BaseInput
          label="Phone number"
          placeholder="+998 (99) 324-42-91"
          :value="formData.phoneNumber"
          :error="errors.phoneNumber"
          @onInput="(value) => changeField('phoneNumber', value)"
        />
      </div>

      <div class="account__checkbox">
        <h3 class="account__title">Email notifications</h3>
        <div class="profile-notifications__wrapper">
          <BaseCheckbox
            label="New deals"
            :checked="formData.emailNotifications.newDeals"
            @onChange="(value) => changeField('newDeals', value)"
          />

          <BaseCheckbox
            label="New restaurants"
            :checked="formData.emailNotifications.newRestaurants"
            @onChange="(value) => changeField('newRestaurants', value)"
          />

          <BaseCheckbox
            label="Order statuses"
            :checked="formData.emailNotifications.orderStatuses"
            @onChange="(value) => changeField('orderStatuses', value)"
          />

          <BaseCheckbox
            label="Password changes"
            :checked="formData.emailNotifications.passwordChanges"
            @onChange="(value) => changeField('passwordChanges', value)"
          />
          <BaseCheckbox
            label="Special offers"
            :checked="formData.emailNotifications.specialOffers"
            @onChange="(value) => changeField('specialOffers', value)"
          />
          <BaseCheckbox
            label="Newsletter"
            :checked="formData.emailNotifications.newsLetter"
            @onChange="(value) => changeField('newsLetter', value)"
          />
        </div>
      </div>

      <div class="profile-form-divider"></div>

      <div class="account__btns">
        <BaseButton
          class="account__btns-dangerBtn"
          variant="danger-outline"
          @onClick="logout"
          >Log out</BaseButton
        >
        <div>
          <BaseButton disabled="disabled" class="account__btns-discardBtn"
            >Discard changes</BaseButton
          >
          <BaseButton
            class="SaveBtn"
            @onClick="saveChangeClick"
            :loading="isLoading"
            >Save changes</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ProfilePage",
  data() {
    return {
      isLoading: false,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        emailNotifications: {
          newDeals: false,
          newRestaurants: false,
          orderStatuses: false,
          passwordChanges: false,
          specialOffers: false,
          newsLetter: false,
        },
      },
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    ...mapMutations({
      logoutUser: "auth/logout",
    }),
    changeField(propertyName, value) {
      if (this.errors[propertyName] !== "") {
        this.errors[propertyName] = "";
      }

      this.formData[propertyName] = value;
      this.formData.emailNotifications[propertyName] = value;
    },
    saveChangeClick() {
      this.isLoading = true;

      setTimeout(() => {
        this.errors.firstName = "* This firstName is not valid!";
        this.errors.lastName = "* This lastName is not valid!";
        this.errors.email = "* This email is not valid!";
        this.errors.phoneNumber = "* This phoneNumber is not valid!";

        this.isLoading = false;
      }, 2500);
    },
    logout() {
      this.logoutUser();
      this.$router.push("/");
    },
  },
};
</script>
