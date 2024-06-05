import { mount } from "@vue/test-utils";
import DropdownComponent from "@/components/DropdownComponent.vue";
import axios from "axios";
import flushPromises from "flush-promises";

jest.mock("axios");

const mockUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

describe("DropdownComponent.vue", () => {
  it("fetches and displays users in dropdown", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockUsers });

    const wrapper = mount(DropdownComponent);
    await flushPromises();

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    const options = wrapper.findAll("option");
    expect(options.length).toBe(mockUsers.length);
    expect(options[0].text()).toBe(mockUsers[0].name);
  });

  it("displays user details on selection", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockUsers });

    const wrapper = mount(DropdownComponent);
    await flushPromises();

    wrapper.find("select").setValue(mockUsers[0].id);
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".user-details").isVisible()).toBe(true);
    expect(wrapper.find(".user-details").text()).toContain(
      mockUsers[0].username
    );
  });
});
