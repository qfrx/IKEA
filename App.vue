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

	/* 单行文本溢出 */
	.one-txt-cut {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	/* 多行文本溢出 */
	.txt-cut {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.uni-page-head {
		transition: all, 1.5s;
	}
</style>