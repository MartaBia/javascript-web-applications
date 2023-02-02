class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.model.setRepoInfo(repoData);

        this.display();
      });
    });
  }

  display() {
    const data = this.model.getRepoInfo();

    const repoName = document.querySelector('#repo-name');
    repoName.textContent = data.full_name;
    const repoDescription = document.querySelector('#repo-description');
    repoDescription.textContent = data.description;
    const repoImg = document.querySelector('#repo-image');
    repoImg.src = data.organization.avatar_url;
  }
}

module.exports = GithubView;