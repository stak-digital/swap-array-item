interface IArgs {
    optionFilter: (option : HTMLOptionElement) => boolean
}

export default function(selectElement : HTMLSelectElement, {
    optionFilter
} : IArgs = {}) : void