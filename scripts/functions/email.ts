interface error {
  message?: string
  type?: string
}

export const printError = ({ type }:error) => {    
  switch (type) {
    case "pattern" : return "This email address isn't valid"
    case "required" : return "Please fill in your email address"
    default: return ""
  }
}