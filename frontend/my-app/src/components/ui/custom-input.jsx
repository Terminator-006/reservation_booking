import PropTypes from "prop-types"
import { Input as ShadcnInput } from "@/components/ui/input"

export const CustomInput = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <ShadcnInput {...props} />
    </div>
  )
}

CustomInput.propTypes = {
  label: PropTypes.string,
}

