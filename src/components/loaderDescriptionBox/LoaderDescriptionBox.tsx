import Spinner from "../microcomponents/spinner";
import "./LoaderDescriptionBox.scss";

interface LoaderDescriptionProps {
  descriptionText: string;
}
export default function LoaderdescriptionBox({
  descriptionText,
}: LoaderDescriptionProps) {
  return (
    <div id="loader-box">
      <Spinner />
      <h6>Loading {descriptionText} products...</h6>
    </div>
  );
}
