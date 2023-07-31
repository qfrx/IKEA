<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */

	@import "uni_modules/uview-ui/index.scss";
	@import "/static/font.css";
	.uni-video-container {
		background-color: transparent;
	}
	.u-skeleton__wrapper__content__rows{
		&:nth-child(3){
			width: 25% !important;
		}
	}

</style>