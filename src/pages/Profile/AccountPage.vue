<template>
  <div>
    <h3 class="profile__name">Account</h3>
    <div class="account__info">
      <h2 class="account__title">Personal information</h2>
      <p class="account__text">Avatar</p>
      <div class="account__action">
        <img class="account__img" src="@/assets/profile/girl.svg" />

        <BaseButton
          v-if="isEditing"
          class="account__btns-discardBtn"
          @onClick="cancelEditing"
        >
          Cancel
        </BaseButton>

        <BaseButton
          v-else
          variant="primary-outline"
          @onClick="isEditing = true"
        >
          Change
        </BaseButton>
      </div>

      <div class="account__input">
        <BaseInput
          label="First name"
          placeholder="Jane"
          :value="formData.firstName"
          :error="errors.firstName"
          :disabled="!isEditing || isLoading"
          @onInput="(value) => changeField('firstName', value)"
        />

        <BaseInput
          label="Last name"
          placeholder="Robertson"
          :value="formData.lastName"
          :error="errors.lastName"
          :disabled="!isEditing || isLoading"
          @onInput="(value) => changeField('lastName', value)"
        />

        <BaseInput
          label="Email"
          placeholder="jane.robertson@example.com"
          :value="formData.email"
          :error="errors.email"
          :disabled="!isEditing || isLoading"
          @onInput="(value) => changeField('email', value)"
        />

        <BaseInput
          label="Phone number"
          placeholder="+998 (99) 324-42-91"
          :value="formData.phoneNumber"
          :error="errors.phoneNumber"
          :disabled="!isEditing || isLoading"
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
          <BaseButton
            v-if="isEditing"
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
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "AccountPage",
  data() {
    return {
      isEditing: false,
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
  computed: {
    ...mapGetters({
      userData: "user/userData",
    }),
  },
  mounted() {
    this.initPage();
  },
  methods: {
    ...mapMutations({
      logoutUser: "auth/logout",
    }),
    initPage() {
      this.formData.firstName = this.userData.firstName;
      this.formData.lastName = this.userData.lastName;
      this.formData.email = this.userData.email;
      this.formData.phoneNumber = this.userData.phoneNumber;
    },
    cancelEditing() {
      this.isEditing = false;
      this.initPage();
    },
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
        this.isLoading = false;
        this.isEditing = false;
      }, 2500);
    },
    logout() {
      this.logoutUser();
      this.$router.push("/");
    },
  },
};
</script>
