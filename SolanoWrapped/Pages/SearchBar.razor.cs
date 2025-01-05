using Microsoft.AspNetCore.Components;

namespace SolanoWrapped.Pages
{
    public partial class SearchBar
    {
        private string TokenInput { get; set; }

        [Parameter]
        public EventCallback<string> OnSearch { get; set; }

        private async Task Search()
        {
            if (!string.IsNullOrWhiteSpace(TokenInput))
            {
                await OnSearch.InvokeAsync(TokenInput.Trim());
                TokenInput = string.Empty;
            }
        }
    }
}