import FormInput from "./pages/komponents/FormInput";
import JudulSection from "./pages/komponents/JudulSection";
import Section from "./pages/komponents/Section";

export default function EditTodo() {
    return (
        <Section name="Edit Todo">
            <JudulSection title="Edit Todo" textPosition="text-center" />
            <FormInput action="/edit-todo" />
        </Section>
    );
}