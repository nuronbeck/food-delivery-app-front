<template>
    <div class="input-box">
        <label for="lastname">{{ label }}</label>
        <input type="text" name="lastname" id="lastname" required :placeholder="placeholder">
    </div>
</template>

<script>
export default {    
    name: "BaseInput",
    props: {
        label: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
    }
}
</script>

<style>
.input-box {
    width: 100%;
    padding: 0 16px 32px 0;
}

.input-box label {
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #545563;

}

.input-box input {
    width: 100%;
    height: 44px;
    border: 1px solid #C7C8D2;
    border-radius: 8px;
    padding: 12px;
    letter-spacing: 0.1px;
    color: #2B2B43;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 4px;
}
</style>