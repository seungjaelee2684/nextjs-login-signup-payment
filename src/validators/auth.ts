import { z } from "zod";

export const registerSchema: any = z.object({
    username: z
        .string()
        .min(2, "이름은 2글자 이상이어야 합니다.",)
        .max(100, { message: "이름은 100글자 이하이어야 합니다." }),
    email: z
        .string()
        .email("올바른 이메일을 입력해주세요."),
    phone: z
        .string()
        .min(11, "연락처는 11자리여야 합니다.")
        .max(11, "연락처는 11자리여야 합니다.")
        .regex(/^010\d{8}$/, "010으로 시작하는 11자리 숫자를 입력해주세요."),
    role: z
        .string()
        .refine(value => value, "역할을 선택해주세요."),
    password: z
        .string()
        .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
        .max(100, "비밀번호는 100자리 이하이어야 합니다.")
        .regex(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
        ),
    confirmPassword: z
        .string()
        .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
        .max(100, "비밀번호는 100자리 이하이어야 합니다.")
        .regex(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
        ),
});