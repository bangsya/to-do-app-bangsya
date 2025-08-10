import FormInput from "./komponents/FormInput";
import JudulSection from "./komponents/JudulSection";
import Section from "./komponents/Section";

export default function EditTodo() {
    return (
        <Section name="Edit Todo">
            <JudulSection title="Edit Todo" textPosition="text-center" />
            <FormInput action="/edit-todo" />
        </Section>
    );
}