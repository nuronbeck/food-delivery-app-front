<template>
    <div class="form-checkbox">
        <input class="form-checkbox__label" type="checkbox" id="checkbox1">
        <label  for="checkbox1">{{ label }}</label>
    </div>
</template>

<script>

export default {
    name: "BaseCheckbox",
    props: {
        label: {
            type: String,
            default: ""
        },
    }
}


</script>

<style lang="scss">
// Variables
$checkbox-width: 20px;
 
// Checkboxes
input[type="checkbox"] {
    display: none;
    &+label {
        font-family: $base-font;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.1px;
        color: $color-dark;

        // Default State
        &:before {
            content: "\2714";
            border: 1px solid $color-grey;
            border-radius: 4px;
            display: inline-block;
            padding-left: 2px;
            margin: 0 12px 24px 0;
            color: transparent;
            transition: 0.2s;
            width: $checkbox-width;
            height: $checkbox-width;
        }

        &:active {
            &::before {
                transform: scale(0);
            }
        }
    }

    // Checked State
    &:checked+label {
        &:before {
            background: $color-primary;
            color: $color-white;
        }
    }
}


</style>