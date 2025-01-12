export type Filter = {
    columnName: string; // The name of the column to filter on, e.g., "status".
    options: FilterOptions[]; // The available options for the filter.
}; 
export type FilterOptions = {
    value: string; // Represents the value of the option, e.g., "backlog".
    label: string; // The human-readable label, e.g., "Backlog".
    icon?: React.ElementType; // Optional React component type for the icon, e.g., HelpCircle.
}