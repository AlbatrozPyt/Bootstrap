import { ButtonSubmit } from "../Button";
import { InputDefault } from "../Input";

export const Form = ({inputs, onSubmit}) => {
    return (
        <form className="d-flex flex-column align-items-center gap-4" onSubmit={onSubmit}>
            {
                inputs.map((x, index) => {
                    return (
                        <InputDefault
                            id={x.id}
                            name={x.name}
                            type={x.type}
                            value={x.value}
                            label={x.label}
                            onChange={x.onChange}
                            key={index}
                        />
                    );
                })
            }

            <ButtonSubmit>Logar</ButtonSubmit>
        </form>
    );
}