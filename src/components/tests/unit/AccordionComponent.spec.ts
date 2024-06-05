import { shallowMount } from "@vue/test-utils";
import AccordionComponent from "@/components/AccordionComponent.vue";
import axios from "axios";
import flushPromises from "flush-promises";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("AccordionComponent.vue", () => {
  it("fetches and displays users", async () => {
    const users = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
        },
      },
    ];
    mockedAxios.get.mockResolvedValue({ data: users });

    const wrapper = shallowMount(AccordionComponent);
    await flushPromises();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(wrapper.findAll(".accordion-item").length).toBe(users.length);
  });

  it("toggles sections", async () => {
    const users = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
        },
      },
    ];
    mockedAxios.get.mockResolvedValue({ data: users });

    const wrapper = shallowMount(AccordionComponent);
    await flushPromises();

    wrapper.find(".accordion-header").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.activeSection).toBe(0);
    expect(wrapper.find(".accordion-content").exists()).toBe(true);

    wrapper.find(".accordion-header").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.activeSection).toBe(null);
    expect(wrapper.find(".accordion-content").exists()).toBe(false);
  });
});
