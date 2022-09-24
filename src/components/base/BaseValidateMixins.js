import { RULE_CODES, FIELD_NAME_VN } from "@/constants.js";
export const BaseValidateMixins = {
  data() {
    return {
      needValidateData: {},
    };
  },
  methods: {
    validateData() {
      const listError = {};
      for (const key of Object.keys(this.needValidateData)) {
        const rules = this.needValidateData[key].rules;
        for (let index in rules) {
          if (rules[index] === RULE_CODES.REQUIRE) {
            if (!this.needValidateData[key].value) {
              const error = {
                key: key,
                msg: `${FIELD_NAME_VN[key]} không được để trống`,
              };
              listError[error.key] = error.msg;
            }
          }
        }
      }
      return listError;
    },
  },
};
