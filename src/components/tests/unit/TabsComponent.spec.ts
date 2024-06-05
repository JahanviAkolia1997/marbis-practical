import { mount } from "@vue/test-utils";
import TabsComponent from "@/components/TabsComponent.vue";
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

describe("TabsComponent.vue", () => {
  it("fetches and displays users in tabs", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockUsers });

    const wrapper = mount(TabsComponent);
    await flushPromises();

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBe(mockUsers.length);
    expect(buttons[0].text()).toBe(mockUsers[0].name);
  });

  it("displays user details on tab selection", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockUsers });

    const wrapper = mount(TabsComponent);
    await flushPromises();

    wrapper.findAll("button")[0].trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".tab-content").isVisible()).toBe(true);
    expect(wrapper.find(".tab-content").text()).toContain(
      mockUsers[0].username
    );
  });
});
