import { ColorsProps, ResultProps } from "../types";
import api from "./api";

class Color {
  async list(): Promise<ColorsProps[]> {
    const { data } = await api.get("/");
    return data;
  }
  async create(props: ColorsProps): Promise<ColorsProps> {
    const { data } = await api.get(
      `/${props.red}/${props.green}/${props.blue}`
    );
    return data;
  }
  async remove(id: number): Promise<ResultProps> {
    const { data } = await api.get(`/${id}`);
    return data;
  }
}
const color = new Color();
export default color;
