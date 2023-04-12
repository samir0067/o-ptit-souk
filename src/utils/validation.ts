import { date, mixed, object, string } from "yup"
import { Order, Profile } from "./types"

const content = {
  requiredField: "N'oublie pas de renseigner ce champ",
  emailValide: "Le format de l'e-mail n'est pas valide",
  passwordField: "Au moins 6 caractères s'il te plaît ",
  requiredNumberField: "Il doit y avoir 5 chiffres",
  needTrueDateField: "On a besoin d'une vraie date",
  chooseBetween: "Choisissez entre 'Livraison' et 'Retrait",
}

export const authSchema = object().shape({
  email: string().email(content.emailValide).required(content.requiredField).trim(),
  password: string().min(6, content.passwordField).required(content.requiredField).trim(),
})

export const profileSchema = object<Profile>().shape({
  firstname: string().required(content.requiredField).trim(),
  lastname: string().required(content.requiredField).trim(),
  phone: string().optional().min(10).max(10).trim(),
  street: string().optional().trim(),
  city: string().optional().trim(),
  zipCode: string().test("length", content.requiredNumberField, (val) => val?.length === 5),
})

export const orderSchema = object<Order>().shape({
  onWhichDate: date().required(content.requiredField).min(new Date(), content.needTrueDateField),
  deliveryType: mixed<"delivery" | "pickUp">()
    .oneOf(["delivery", "pickUp"], content.chooseBetween)
    .required(content.requiredField),
  // alreadyPaid: mixed<boolean>()
  //   .oneOf([true, false], "Veuillez indiquer si le paiement a déjà été effectué"),
})
