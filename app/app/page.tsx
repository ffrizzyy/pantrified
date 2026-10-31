import App from "@/components/App";
import { UiProvider } from "@/lib/ui";

export default function Page() {
  return (
    <UiProvider>
      <App />
    </UiProvider>
  );
}
