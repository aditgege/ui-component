import {Meta, Story} from '@storybook/vue3';
import VDataTable from './VDataTable.vue';

const items = [...Array(30)].map((item, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
}));

export default {
  title: 'Components/DataTable',
  component: VDataTable,
  argTypes: {},
  args: {
    itemsPerPage: 10,
    items,
    headers: [
      {
        value: 'index',
        text: 'ID',
      },
      {
        value: 'name',
        text: 'Name',
      },
      {
        value: 'email',
        text: 'Email',
      },
    ],
    striped: false,
    hover: false,
    dense: false,
    loading: false,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VDataTable,
  },
  setup() {
    return {args};
  },
  template: `<v-data-table v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" />`,
    },
  },
};

export const Striped = Template.bind({});
Striped.args = {
  striped: true,
};
Striped.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" striped />`,
    },
  },
};

export const Hover = Template.bind({});
Hover.args = {
  hover: true,
};
Hover.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" hover />`,
    },
  },
};

export const Dense = Template.bind({});
Dense.args = {
  dense: true,
};
Dense.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" dense />`,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
Loading.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" loading />`,
    },
  },
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};
Empty.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="[]" />`,
    },
  },
};
